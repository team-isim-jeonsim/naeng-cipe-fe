import { MemberResponse, SessionUser } from '@/model/member';

declare module 'next-auth' {
  interface User {
    member: MemberResponse;
    accessToken: string;
    accessTokenExp: number;
    refreshToken: string;
  }

  interface Session {
    user: SessionUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    accessTokenExp: number;
    refreshToken: string;
    user: MemberResponse;
    error?: TokenError;
  }
}
