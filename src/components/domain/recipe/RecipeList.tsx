'use client';

import Pagination from '@/components/global/ui/pagination/Pagination';
import { useRecipes } from '@/hooks/react-query/recipe/recipeQueries';
import { RecipesResponse } from '@/model/recipe';
import { useRouter, useSearchParams } from 'next/navigation';
import RecipeListItem from './RecipeListItem';
import { useEffect } from 'react';

export default function RecipeList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { recipes, isLoading } = useRecipes(page);

  // 새로고침 시 url에 담긴 페이지네이션 정보 초기화
  useEffect(() => {
    if (localStorage.getItem('reload') === 'true') {
      router.replace('/');
      localStorage.removeItem('reload');
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('reload', 'true');
    });

    return () => {
      localStorage.removeItem('reload');
    };
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!recipes || !recipes?.content) {
    return <div>Data Not Fount</div>;
  }

  return (
    <div className='w-full flex flex-col gap-8'>
      <ul className='w-full'>
        {recipes.content.map((recipe: RecipesResponse) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
      <Pagination totalPages={recipes.totalPages} currentPage={page} />
    </div>
  );
}
