import Post from "@/app/models/Post";
// import { connectMongo } from "@/lib/mongodb";
import connectMongo from '@/lib/connectMongo';


export async function GET(request) {
  try {
    await connectMongo();

    const url = new URL(request.url);
    const title = url.searchParams.get('title'); 
    console.log(title)
    if (title) {
      // Fetch a single Admin by ID
      const bus = await Post.findOne({ title: title });
      if (!bus) {
        return new Response(JSON.stringify({ message: 'busbook not found' }), {
          status: 404,
        });
      }
      return new Response(JSON.stringify({ bus }), { status: 200 });
    }

  } catch (error) {
    return new Response(JSON.stringify({ message: 'error', error }), { status: 500 });
}
}
export async function POST(request) {
    try {
      const {title} = await request.json();
    console.log(title)

  

      await connectMongo();
  
  
      const post = await Post.findOne({ title: title });
      if (!post) {
        throw new Error("No Post found with this email");
      }
  
      return new Response(JSON.stringify({ message: 'success',post : post }), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error',err : error }), {
        status: 500,
      });
    }
  }
  