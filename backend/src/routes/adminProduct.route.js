import { authenticate } from "../middleware/authenticate.js";
import {
  createMultipleProducts,
  createdProduct,
  deletedProduct,
  updatedProduct,
} from "../controllers/product.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticate, createdProduct); 
router.post("/create", authenticate, createMultipleProducts);
router.delete("/:id", authenticate, deletedProduct);
router.put("/:id", authenticate, updatedProduct);

export default router;
