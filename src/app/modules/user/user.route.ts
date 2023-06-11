import express from 'express';
import { UserController } from './user.controller';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

//api end-point

router.post(
  '/create-user',
  validateRequestHandler(userValidation.createZodUserSchema),
  UserController.createUser
);

export const UserRoutes = router;
