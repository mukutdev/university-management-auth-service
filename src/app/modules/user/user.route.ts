import express from 'express'
import userController from './user.controller'
const router = express.Router()

//api end-point

router.post('/create-user', userController.createUser)

export default router
