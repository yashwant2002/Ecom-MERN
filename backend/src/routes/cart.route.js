import {addItemtoCart, findUserCarts} from "../controllers/cart.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.get("/", authenticate, findUserCarts)
router.put("/add", authenticate, addItemtoCart)

export default router;