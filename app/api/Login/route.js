import connectMongo from "@/lib/connectMongo";
import Admin from '@/app/models/Admin';
import bcrypt from 'bcryptjs';


export async function GET(request) {
    return new Response(JSON.stringify({ message: 'This is a GET request' }));
  } 

export async function POST(request) {
    try {
      const {email, password } = await request.json();
      await connectMongo();
      const pass = await bcrypt.hash(password,10)
      const admin = new Admin({ email, password :pass });
      await admin.save();
  
      return new Response(JSON.stringify({ message: 'admin' }), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error',err : error }), {
        status: 500,
      });
    }
  }
  
  
