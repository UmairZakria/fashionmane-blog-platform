// import { connectMongo } from '../../../lib/mongodb';
import connectMongo from '@/lib/connectMongo';

import Post from '@/app/models/Post';
export async function GET(request) {
    return new Response(JSON.stringify({ message: 'This is a GET request' }));
  } 

  export async function POST(request) {
    try {
      const { title, discription, image, category, content } = await request.json();
  
      await connectMongo();
      const newPost = new Post({ title, discription, image, category, content });
      await newPost.save();
      return new Response(JSON.stringify({ message: 'done' }), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error', err: error }), {
        status: 500,
      });
    }
  }



  export async function PUT(request) {
    try {
      const { title,ctitle, discription, image, category, content } = await request.json();
  
      await connectMongo();
      const UpdatedPost = await Post.findOneAndUpdate({title:title},{ title:ctitle, discription, image, category, content },  { new: true } );

      return new Response(JSON.stringify({ message: 'done' ,up:UpdatedPost}), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error', err: error }), {
        status: 500,
      });
    }
  }
  