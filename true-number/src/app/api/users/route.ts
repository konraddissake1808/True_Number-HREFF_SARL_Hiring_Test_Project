import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ connected: true });
  } catch (error) {
    console.error('Mongoose connection error:', error);
    return NextResponse.json({ connected: false, error: (error as Error).message }, { status: 500 });
  }
}