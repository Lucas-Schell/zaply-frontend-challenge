import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected){
    console.log('on')
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI);

  connection.isConnected = db.connections[0].readyState;
}
export default dbConnect;
