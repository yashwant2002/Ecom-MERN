import { Router } from "express"
import { getAllUser, getUserProfile } from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUser);
router.get("/profile", getUserProfile)

export default router;