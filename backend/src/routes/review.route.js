import {createReviews, getAllReview} from "../controllers/review.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.post("/create", authenticate, createReviews);
router.get("/product/:productId", authenticate, getAllReview)

export default router