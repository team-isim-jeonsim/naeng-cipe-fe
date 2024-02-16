import ImageOffIcon from '@/components/global/ui/icon/ImageOffIcon';
import { RecipesResponse } from '@/model/recipe';
import dateConverter from '@/util/dateConverter';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeListItem({
  recipe,
}: {
  recipe: RecipesResponse;
}) {
  return (
    <li className='min-h-[100px] w-full mb-5'>
      <div className='w-full h-full flex'>
        <Link
          href={`/recipes/${recipe.id}`}
          className='w-full h-full basis-1/4'
        >
          <div className='relative flex flex-col items-center justify-around bg-base-200 py-4 h-full min-h-[112px] rounded-lg text-gray-500'>
            {recipe?.thumbnail ? (
              <Image
                src={recipe.thumbnail}
                alt=''
                fill
                className='rounded-md object-cover'
              />
            ) : (
              <div className='absolute w-full h-full inset-0 flex flex-col justify-center items-center'>
                <div className='w-14 h-14'>
                  <ImageOffIcon />
                </div>
              </div>
            )}
          </div>
        </Link>
        <div className='basis-3/4 px-5 py-2 flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>{recipe.writer}</p>
            <Link href={`/recipes/${recipe.id}`}>
              <h6 className='text-xl font-bold tracking-wide'>
                {recipe.title}
              </h6>
            </Link>
          </div>
          <p className='text-sm'>{dateConverter(recipe.createdDate)}</p>
        </div>
      </div>
    </li>
  );
}
