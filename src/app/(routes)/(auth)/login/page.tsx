import LoginForm from '@/components/domain/auth/LoginForm';

export default function LoginPage() {
  return (
    <section className='h-full flex flex-col items-center max-w-xl w-full mx-auto pt-16 px-12 gap-10'>
      <h4 className='text-3xl font-bold tracking-wider'>로그인</h4>
      <LoginForm />
    </section>
  );
}
