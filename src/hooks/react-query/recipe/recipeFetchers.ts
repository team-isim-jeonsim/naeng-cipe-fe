import { CLIENT_BASE_URL, TYPE_JSON, clientHeader } from '@/config/fetchConfig';

export const recipeDetailFetcher = async ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const [_key, recipeId] = queryKey;
  console.log(`queryKey recipeId: ${recipeId}`);

  const res = await fetch(`${CLIENT_BASE_URL}/recipes/${recipeId}`, {
    headers: clientHeader(TYPE_JSON),
    method: 'GET',
  });

  return res.json();
};

export const recipesFetcher = async ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
  const [_key, page] = queryKey;
  console.log('page?: ' + page);
  const res = await fetch(`${CLIENT_BASE_URL}/recipes?page=${page}`, {
    headers: clientHeader(TYPE_JSON),
    method: 'GET',
  });

  return res.json();
};
