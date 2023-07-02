import express from 'express';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { authValidation } from './auth.validation';
import { AuthController } from './auth.controller';
const router = express.Router();

//api end-point

router.post(
  '/login',
  validateRequestHandler(authValidation.loginZodSchema),
  AuthController.loginUser
);
router.post(
  '/refresh-token',
  validateRequestHandler(authValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

export const AuthRoutes = router;
