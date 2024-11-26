import {createRatings, getProductRatings} from "../controllers/rating.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.post("/create", authenticate, createRatings);
router.put("/product/:productId", authenticate, getProductRatings)

export default router;