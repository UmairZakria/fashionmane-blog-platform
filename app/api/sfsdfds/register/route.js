import { connectMongo } from '../../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';


export async function GET(request) {
    return new Response(JSON.stringify({ message: 'This is a GET request' }));
  } 

  export async function POST(request) {
    try {
      const {email, password } = await request.json();
  
      // Connect to MongoDB
      await connectMongo();
  
      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save();
  
      return new Response(JSON.stringify({ message: 'user' }), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error',err : error }), {
        status: 500,
      });
    }
  }
  
  
