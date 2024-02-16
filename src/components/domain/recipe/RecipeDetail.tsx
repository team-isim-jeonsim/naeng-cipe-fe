'use client';

import ImageOffIcon from '@/components/global/ui/icon/ImageOffIcon';
import { useRecipeDetail } from '@/hooks/react-query/recipe/recipeQueries';
import { RecipeResponse } from '@/model/recipe';
import Image from 'next/image';

interface RecipeDetailProps {
  recipeId: string;
}

const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

const getRandomIndex = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getBackgroundColor = () => {
  const randomColorClass = getRandomIndex();
  return {
    red: 'bg-red-200',
    yellow: 'bg-yellow-200',
    green: 'bg-green-200',
    blue: 'bg-blue-200',
    indigo: 'bg-indigo-200',
    purple: 'bg-purple-200',
    pink: 'bg-pink-200',
  }[randomColorClass];
};

export default function RecipeDetail({ recipeId }: RecipeDetailProps) {
  const { recipe, isLoading, isFetching } = useRecipeDetail(recipeId);

  console.log(recipe);

  if (isLoading || isFetching) {
    return <div>Loading</div>;
  }

  if (!recipe) {
    return <div>Data Not Found</div>;
  }

  return (
    <div className='flex flex-col gap-8 max-w-screen-md mx-auto'>
      <div className='relative min-w-[768px] min-h-[400px]'>
        {recipe.images.length !== 0 ? (
          <Image
            src={recipe.images[0]?.imageUrl}
            alt=''
            fill
            className='rounded-md object-cover'
          />
        ) : (
          <div className='absolute w-full h-full inset-0 flex flex-col justify-center items-center bg-base-200 rounded-md'>
            <div className='w-20 h-20 text-gray-500'>
              <ImageOffIcon />
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-4xl font-bold'>{recipe.title}</h3>
        <div>
          <h6 className='text-xl'>{recipe.writer}</h6>
        </div>
      </div>
      <div className='min-h-[400px] p-5 flex flex-col gap-5'>
        <ul className='flex justify-center items-center'>
          {recipe?.ingredients.map((ingredient: IngredientResponse) => (
            <li
              key={ingredient.id}
              className={`mr-2 py-1 px-3 rounded-2xl text-sm ${getBackgroundColor()}`}
            >
              {ingredient.name}
            </li>
          ))}
        </ul>
        <div className='whitespace-pre-line'>{recipe.content}</div>
      </div>
    </div>
  );
}
