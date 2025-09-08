// service.ts
import mongoose  from 'mongoose';
import app from './app';
import dotenv from "dotenv"
import { envVars } from './app/config/env';
dotenv.config();

let server;
const port = envVars.PORT || 5000; 

// ================== MONGODB CONNECTION ==================
const connectDB = async () => {
  // console.log(envVars.MONGO_URI,"....................."); 
  
  try {
    const mongoURI = envVars.DB_URL;
    await mongoose.connect(mongoURI); 
    console.log('MongoDB connected successfully');
 server = app.listen(port, () => {
  console.log(`Library Management app listening on port ${port}`)
})
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    // process.exit(1); 
  }
};

connectDB()
