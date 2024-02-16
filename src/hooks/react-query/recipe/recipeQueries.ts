import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { recipeDetailFetcher, recipesFetcher } from './recipeFetchers';

export const useRecipeDetail = (recipeId: string) => {
  const {
    data: recipe,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: recipeDetailFetcher,
  });

  return { recipe, isLoading, isFetching };
};

export const useRecipes = (page: number) => {
  const { data: recipes, isLoading } = useQuery({
    queryKey: ['recipes', page],
    queryFn: recipesFetcher,
    placeholderData: keepPreviousData,
  });

  return { recipes, isLoading };
};
