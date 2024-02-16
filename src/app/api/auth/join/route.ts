import { addMember } from '@/service/authService';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const joinRequest = await req.json();
  console.log(joinRequest);

  if (!joinRequest) {
    return new Response('Bad Request', { status: 400 });
  }

  return addMember(joinRequest)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(JSON.stringify(err), { status: 500 }));
}
