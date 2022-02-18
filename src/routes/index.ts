import express from "express"
import userRoute from "./user.route"
import sessionRoute from "./session.route"
import requireUser from "../middleware/require_user"

const router = express.Router()

router.use("/users", userRoute)
router.use("/sessions", sessionRoute)
router.use(requireUser)


export default router