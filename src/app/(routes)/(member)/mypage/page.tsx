export default function MyPage() {
  return (
    <section className='w-fit h-full flex justify-center items-center'>
      <div className='relative overflow-hidden w-[400px] h-[600px] border-8 border-lime-600/20 rounded-3xl flex flex-col bg-amber-300/10'>
        <div className='basis-1/3 border-b-8 border-lime-600/20 flex items-center pl-5'>
          <div className='w-[30px] h-[80px] border-8 border-lime-600/20 rounded-3xl'></div>
        </div>
        <div className='relative overflow-hidden basis-2/3 pl-5 pt-5'>
          <div className='w-[30px] h-[120px] border-8 border-lime-600/20 rounded-3xl'></div>
          <div className='absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='px-6 py-8 h-full text-2xl text-center'>재료</div>
          </div>
        </div>
      </div>
    </section>
  );
}
