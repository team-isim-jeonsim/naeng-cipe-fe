import RecipeDetail from '@/components/domain/recipe/RecipeDetail';
import { getRecipeDetail } from '@/service/recipeService';
import { cache } from 'react';

export interface Params {
  params: {
    recipeId: string;
  };
}

export const getCacheRecipe = cache(
  async (recipeId: string) => await getRecipeDetail(recipeId)
);

export default async function RecipeDetailPage({
  params: { recipeId },
}: Params) {
  return (
    <section className='w-full flex flex-col items-center pt-14 px-8'>
      <RecipeDetail recipeId={recipeId} />
    </section>
  );
}
