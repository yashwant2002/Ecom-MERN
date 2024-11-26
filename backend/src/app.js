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
import productRouter from "./routes/product.route.js"
import adminProductRouter from "./routes/adminProduct.route.js"
import orderRouter from "./routes/order.router.js"
import adminOrderRouter from "./routes/adminOrder.route.js"
import cartRouter from "./routes/cart.route.js"
import cartItemRouter from "./routes/cartItem.route.js"
import reviewRouter from "./routes/review.route.js"
import ratingRouter from "./routes/rating.route.js"

// Router declaration

app.use("/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/admin/product", adminProductRouter)
app.use("/api/cart", cartRouter)
app.use("/api/cartItem", cartItemRouter)
app.use("api/order", orderRouter)
app.use("api/admin/order", adminOrderRouter)
app.use("/api/review", reviewRouter)
app.use("/api/rating", ratingRouter)

export default app