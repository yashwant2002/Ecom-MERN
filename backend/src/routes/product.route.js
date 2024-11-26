import {findProductById, getAllProducts} from "../controllers/product.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.get("/", getAllProducts);
router.get("/:id/:id", authenticate, findProductById);

export default router