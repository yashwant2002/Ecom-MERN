import { Router } from "express"
import {authenticate} from "../middleware/authenticate.js"
import {canceledOrders, confirmedOrders, deleteOrders, deliveredOrderOrders, getAllOrders, shipedOrders} from "../controllers/adminOrder.controller.js"

const router = Router()

router.get("/", authenticate, getAllOrders);
router.put("/:orderId/confirmed", authenticate, confirmedOrders);
router.put("/:orderId/ship", authenticate, shipedOrders);
router.put("/:orderId/deliver", authenticate, deliveredOrderOrders);
router.put("/:orderId/cancel", authenticate, canceledOrders);
router.put("/:orderId/delete", authenticate, deleteOrders);

export default router;