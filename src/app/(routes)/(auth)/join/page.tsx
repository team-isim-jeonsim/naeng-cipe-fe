import JoinForm from '@/components/domain/auth/JoinForm';

export default function JoinPage() {
  return (
    <section className='h-full flex flex-col items-center max-w-xl w-full mx-auto pt-16 px-12 gap-10'>
      <h4 className='text-3xl font-bold tracking-wider'>회원가입</h4>
      <JoinForm />
    </section>
  );
}
