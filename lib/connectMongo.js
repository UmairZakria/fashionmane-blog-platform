import mongoose from 'mongoose';

const uri =  process.env.MONGODB_URI 

let isConnected = false;

export default async function connectMongo() {
  console.log('working')
  if (isConnected) {
    return;
  }

  await mongoose.connect(uri);

  isConnected = true;
}
