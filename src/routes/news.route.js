import { Router } from "express"
import { create, findAll, topNews, findById, searchByTitle, searchByUser, update, deleted } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"

const router = Router()

router.post("/create", authMiddleware, create)
router.get("/find", findAll)
router.get("/top", topNews)
router.get("/search", searchByTitle)
router.get("/user", authMiddleware, searchByUser)
router.get("/:id", authMiddleware, findById)
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, deleted)


export default router 