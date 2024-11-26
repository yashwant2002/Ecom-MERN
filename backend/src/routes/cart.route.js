import {addItemtoCart, findUserCart} from "../controllers/cart.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.get("/", authenticate, findUserCart)
router.get("/add", authenticate, addItemtoCart)

export default router;