import { connectToDatabase } from '@/lib/mongodb';
import User from '@/lib/models/users';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  const user = await User.find();
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDatabase();
  const newUser = await User.create(body);
  return NextResponse.json(newUser, { status: 201 });
}