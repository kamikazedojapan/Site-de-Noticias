import { Router } from "express"
import { create, findAll } from "../controllers/news.controller.js"

const router = Router()

router.post("/create", create)
router.get("/find", findAll)

export default router