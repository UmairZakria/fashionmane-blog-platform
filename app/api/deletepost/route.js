import Post from "@/app/models/Post";
// import { connectMongo } from "@/lib/mongodb";
import connectMongo from '@/lib/connectMongo';

export async function GET(request) {
  return new Response(JSON.stringify({ message: 'This is a GET request' }));
}

export async function POST(request) {
  try {
    const { id } = await request.json();


    await connectMongo();

  
      const post =  await Post.deleteOne({ _id: id });
      if (!post) {
        return new Response(JSON.stringify({ message: 'not find'}), {
            status: 404,
          });
      }

      return new Response(JSON.stringify({ message: 'success', post: post }), {
        status: 201,
      });


   
  } catch (error) {
    return new Response(JSON.stringify({ message: 'error', err: error }), {
      status: 500,
    });
  }

}
