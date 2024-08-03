import express from 'express'
import cors from "cors";
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(cookieParser());

// router import
import authRouter from './routes/auth.route.js';
import userRouter from "./routes/user.route.js"

// Router declaration

app.use("/auth", authRouter)
app.use("/api/user", userRouter)

export default app