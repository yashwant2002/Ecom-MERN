import { authenticate } from "../middleware/authenticate.js";
import {
  createdOrder,
  findOrdersById,
  orderHistory,
} from "../controllers/order.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticate, createdOrder);
router.get("/user", authenticate, orderHistory); 
router.get("/:id", authenticate, findOrdersById);

export default router;
