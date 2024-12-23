import {findProductByIds, getAllProducts} from "../controllers/product.controller.js"
import {authenticate} from "../middleware/authenticate.js"
import { Router } from "express"

const router = Router();

router.get("/", authenticate, getAllProducts);
router.get("/id/:id", authenticate, findProductByIds);

export default router