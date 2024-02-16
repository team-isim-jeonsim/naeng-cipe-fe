'use client';

import AuthDiv from '@/components/global/ui/AuthDiv';
import Input from '@/components/global/ui/Input';
import { useJoin } from '@/hooks/react-query/auth/authQueries';
import { JoinRequest } from '@/model/auth';
import { useState } from 'react';

const joinRequestInit = {
  email: '',
  password: '',
  passwordCheck: '',
  nickname: '',
};

export default function JoinForm() {
  const [joinRequest, setJoinRequest] = useState<JoinRequest>(joinRequestInit);
  const { submitJoin } = useJoin();

  const handleJoinRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinRequest({
      ...joinRequest,
      [e.target.name]: e.target.value,
    });
  };

  const handleJoinSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitJoin(joinRequest);
  };

  return (
    <form
      className='w-full flex flex-col gap-8 p-5'
      onSubmit={handleJoinSubmit}
    >
      <AuthDiv>
        <label>이메일</label>
        <Input type='email' name='email' onChange={handleJoinRequestChange} />
      </AuthDiv>
      <AuthDiv>
        <label>비밀번호</label>
        <Input
          type='password'
          name='password'
          onChange={handleJoinRequestChange}
        />
      </AuthDiv>
      <AuthDiv>
        <label>비밀번호 확인</label>
        <Input
          type='password'
          name='passwordCheck'
          onChange={handleJoinRequestChange}
        />
      </AuthDiv>
      <AuthDiv>
        <label>닉네임</label>
        <Input name='nickname' onChange={handleJoinRequestChange} />
      </AuthDiv>
      <div className='w-full text-right'>
        <button className='btn'>가입하기</button>
      </div>
    </form>
  );
}
