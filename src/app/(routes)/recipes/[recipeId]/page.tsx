import RecipeDetail from '@/components/domain/recipe/RecipeDetail';

interface Params {
  params: {
    recipeId: string;
  };
}

export default async function RecipeDetailPage({
  params: { recipeId },
}: Params) {
  return (
    <section className='w-full flex flex-col items-center pt-14 px-8'>
      <RecipeDetail recipeId={recipeId} />
    </section>
  );
}
