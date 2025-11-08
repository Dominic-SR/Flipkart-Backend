import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',indexRouter);
app.listen(process.env.PORT, ()=>console.log(`server running on ${process.env.PORT}`));