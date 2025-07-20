// app/api/example/route.ts
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('hreff');
    
    const data = await db.collection('users').find({}).toArray();
    
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}