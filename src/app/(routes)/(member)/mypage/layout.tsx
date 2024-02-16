import MyInfo from '@/components/domain/member/MyInfo';
import { authOptions } from '@/util/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/');
  }

  return (
    <section className='h-full'>
      <div className='h-full flex flex-col justify-center items-center gap-16'>
        <div>
          <MyInfo user={user} />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
