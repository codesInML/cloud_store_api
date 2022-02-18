import express, {Router} from 'express'
import { createSessionHandler, deleteUserSessionHandler, getUserSessionHandler } from "../controllers/session.controller"
import requireUser from '../middleware/require_user'
import validate from '../middleware/validate_resource'
import { createSessionSchema } from '../schema/session.schema'

const router: Router = express.Router()

router.post('/', validate(createSessionSchema), createSessionHandler)
router.use(requireUser)
router.get('/', getUserSessionHandler)
router.delete('/', deleteUserSessionHandler)

export default router