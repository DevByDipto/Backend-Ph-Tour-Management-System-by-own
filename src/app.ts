// app.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';


const app = express();

// ================== MIDDLEWARES ==================

app.use(express.json());
app.use(cors());

// ================== ROUTES ==================

app.get('/',(req,res)=>{
  res.send("ph-tour-management server is runing")
})

// ================== UNKNOWN ROUTE HANDLER ==================

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// ================== ERROR HANDLER ==================

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

// ==================  Not Found Route HANDLER ==================
app.use((req, res) => { // use kii kaj kore ?
  res.status(404).json({ message: "Route not found" });
});

// ================== EXPORT APP ==================
export default app;
