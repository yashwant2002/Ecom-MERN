import {loginUser, registerUser} from "../controllers/auth.controller.js"
import { Router } from "express"

const router = Router()

router.post("/signup", registerUser);
router.post("/signin", loginUser);

export default router