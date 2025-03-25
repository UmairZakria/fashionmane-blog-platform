import Post from "@/app/models/Post";
// import { connectMongo } from "@/lib/mongodb";
import connectMongo from '@/lib/connectMongo';

export async function GET(request) {
  return new Response(JSON.stringify({ message: 'This is a GET request' }));
}

export async function POST(request) {
  try {
    const { category } = await request.json();


    await connectMongo();

    if (category === 'all') {
      const post = await Post.find({});
      if (!post) {
        throw new Error("No user found with this email");
      }

      return new Response(JSON.stringify({ message: 'success', post: post }), {
        status: 201,
      });


    }
    else {


      const post = await Post.find({ category: category });
      if (!post) {
        throw new Error("No user found with this email");
      }

      return new Response(JSON.stringify({ message: 'success', post: post }), {
        status: 201,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'error', err: error }), {
      status: 500,
    });
  }

}
