import mongoose from 'mongoose';

const uri ='mongodb+srv://zainmukhtar2222:XBv3PVj6xo2euD5w@zain.91dmj.mongodb.net/?retryWrites=true&w=majority&appName=Zain';

let isConnected = false;

export default async function connectMongo() {
  console.log('working')
  if (isConnected) {
    return;
  }

  await mongoose.connect(uri);

  isConnected = true;
}
