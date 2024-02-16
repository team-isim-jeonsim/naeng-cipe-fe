import { getRecipeDetail } from '@/service/recipeService';
import { NextRequest, NextResponse } from 'next/server';

interface Context {
  params: { recipeId: string };
}

export async function GET(_: NextRequest, context: Context) {
  return getRecipeDetail(context.params.recipeId)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(JSON.stringify(err), { status: 500 }));
}
