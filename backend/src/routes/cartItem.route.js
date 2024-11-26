import { removeCartItems, updateCartItem } from "../controllers/cartItem.controller.js";
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.put("/:id", authenticate, updateCartItem)
router.delete("/:id", authenticate, removeCartItems)

export default router;