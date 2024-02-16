'use client';

import { SessionUser } from '@/model/member';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header({ user }: { user?: SessionUser }) {
  return (
    <header>
      <nav className='navbar bg-base-100 max-w-screen-2xl w-full mx-auto'>
        <div className='flex-1'>
          <Link className='btn btn-ghost text-xl' href='/'>
            냉시피
          </Link>
        </div>
        <div className='flex-none'>
          {user ? (
            <>
              <Link href='/mypage' className='btn btn-ghost'>
                마이페이지
              </Link>
              <button className='btn btn-ghost' onClick={() => signOut()}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link className='btn btn-ghost' href='/login'>
                로그인
              </Link>
              <Link className='btn btn-ghost' href='/join'>
                회원가입
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
