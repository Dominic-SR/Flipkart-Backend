import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.routes.js"

const app = express()
app.use(cors());
app.use('/api',indexRouter)
app.listen(3000, ()=>console.log("server running on 3000"))