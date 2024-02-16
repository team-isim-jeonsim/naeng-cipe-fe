import RecipeList from '@/components/domain/recipe/RecipeList';

export default function Home() {
  return (
    <section className='flex justify-center items-center max-w-xl w-full mx-auto pt-20'>
      <RecipeList />
    </section>
  );
}
