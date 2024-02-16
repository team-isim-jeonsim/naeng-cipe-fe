import { API_BASE_URL, TYPE_JSON, apiHeader } from '@/config/fetchConfig';

const RECIPE_URL = `${API_BASE_URL}/recipes`;

export const getRecipeDetail = async (recipeId: string) => {
  console.log('RecipeService - getRecipeDetail');

  try {
    const res = await fetch(`${RECIPE_URL}/${recipeId}`, {
      headers: apiHeader(TYPE_JSON),
      method: 'GET',
      cache: 'no-cache',
    });

    return res.json();
  } catch (err) {}
};

export const getRecipes = async (page: number) => {
  console.log('RecipeService - getRecipes');

  try {
    const res = await fetch(`${RECIPE_URL}?page=${page - 1}`, {
      headers: apiHeader(TYPE_JSON),
      method: 'GET',
      cache: 'no-store',
    });
    //console.log(await res.json());
    return res.json();
  } catch (err) {}
};
