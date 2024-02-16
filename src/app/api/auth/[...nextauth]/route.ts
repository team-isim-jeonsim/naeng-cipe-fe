import { API_BASE_URL } from '@/config/fetchConfig';
import { LoginRequest } from '@/model/auth';
import { loginMember } from '@/service/authService';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        console.log('next-auth');
        console.log(credentials);

        const { email, password } = credentials as LoginRequest;

        const res = await loginMember({ email, password });

        console.log('dd');
        console.log(res);

        if (res?.status >= 400) {
          throw new Error(res.message);
        }

        if (res?.cause) {
          throw new Error('서버와 연결이 끊겼어요... 🥲');
        }

        return res;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log('sign in!!!!!!!!!!!!!!!');
      console.log(user);

      if (user?.status >= 400) return false;

      return true;
    },
    async jwt({ token, user }) {
      console.log('jwt');
      console.log(user);

      if (user) {
        token = {
          accessToken: user.accessToken,
          accessTokenExp: user.accessTokenExp,
          refreshToken: user.refreshToken,
          user: user?.member,
        };
      }

      if (Date.now() > token.accessTokenExp) {
        console.log('액세스 토큰 만료!! 재발급 중...');

        try {
          const res = await fetch(`${API_BASE_URL}/auth/token/reissue`, {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: token.refreshToken,
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error('토큰 만료, 재 로그인 요망');
          }

          console.log(data);

          token = {
            ...token,
            accessToken: data.accessToken,
            accessTokenExp: data.accessTokenExp,
          };
        } catch (err) {
          console.log('액세스 토큰 재발급 오류', err);
          token.error = {
            message: '액세스 토큰 재발급에 실패했습니다.',
            code: -9001,
          };
        }
      }

      return token;
    },
    async session({ session, token }) {
      console.log('session');

      if (token?.user) {
        return {
          expires: new Date(token.accessTokenExp).toISOString(),
          //accessToken: token.accessToken,
          user: {
            ...token.user,
            accessToken: token.accessToken,
          },
        };
      }

      return session;
    },
  },
  pages: {},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };