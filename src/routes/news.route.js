import { Router } from "express"
import { create, findAll } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"

const router = Router()

router.post("/create", authMiddleware, create)
router.get("/find", findAll)

export default router