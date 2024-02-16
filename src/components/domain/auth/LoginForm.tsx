'use client';

import AuthDiv from '@/components/global/ui/AuthDiv';
import Input from '@/components/global/ui/Input';
import { LoginRequest } from '@/model/auth';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const loginRequestInit = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [loginRequest, setLoginRequest] =
    useState<LoginRequest>(loginRequestInit);

  const handleLoginRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginRequest({
      ...loginRequest,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn('credentials', {
      ...loginRequest,
      //redirect: false,
      callbackUrl: '/',
    });
  };

  return (
    <form
      className='flex flex-col gap-8 max-w-xl w-full mx-auto p-5'
      onSubmit={handleLoginSubmit}
    >
      <AuthDiv>
        <label>이메일</label>
        <Input type='email' name='email' onChange={handleLoginRequestChange} />
      </AuthDiv>
      <AuthDiv>
        <label>비밀번호</label>
        <Input
          type='password'
          name='password'
          onChange={handleLoginRequestChange}
        />
      </AuthDiv>
      <button className='btn'>로그인</button>
    </form>
  );
}
