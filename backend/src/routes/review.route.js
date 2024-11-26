import {createReview, getAllReviews} from "../controllers/review.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.post("/create", authenticate, createReview);
router.get("/product/:productId", authenticate, getAllReviews)

export default router