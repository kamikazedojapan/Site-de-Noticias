import { Router } from "express"
import { create, findAll, topNews,findById } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"

const router = Router()

router.post("/create", authMiddleware, create)
router.get("/find", findAll)
router.get("/top", topNews)
router.get("/:id", findById)

export default router