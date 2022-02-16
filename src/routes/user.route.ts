import express, {Router} from 'express'
import { createUserHandler } from '../controllers/user.controller'
import validate from '../middleware/validate_resource'
import { createUserSchema } from '../schema/user.schema'

const router: Router = express.Router()

router.route('/').post(validate(createUserSchema), createUserHandler)

export default router