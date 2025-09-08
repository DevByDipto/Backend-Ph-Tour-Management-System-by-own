// service.ts
import mongoose  from 'mongoose';
import app from './app';
import dotenv from "dotenv"
import { envVars } from './app/config/env';
import { Server } from "http";
dotenv.config();

let server : Server;
const port = envVars.PORT || 5000; 

// ================== MONGODB CONNECTION ==================
const startServer = async () => {
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

startServer()


process.on("SIGTERM", () => {
    console.log("SIGTERM signal recieved... Server shutting down..");

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})

process.on("SIGINT", () => {
    console.log("SIGINT signal recieved... Server shutting down..");

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})


process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejecttion detected... Server shutting down..", err);

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception detected... Server shutting down..", err);

    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }

    process.exit(1)
})
