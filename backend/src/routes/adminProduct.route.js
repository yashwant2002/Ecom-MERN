import { authenticate } from "../middleware/authenticate.js";
import {
  createMultipleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticate, createProduct);
router.post("/create", authenticate, createMultipleProduct);
router.delete("/:id", authenticate, deleteProduct);
router.put("/:id", authenticate, updateProduct);

export default router;
