import express from 'express';
import { UserController } from './user.controller';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

//api end-point

router.post(
  '/create-student',
  validateRequestHandler(userValidation.createZodUserSchema),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  validateRequestHandler(userValidation.createFacultyZodSchema),
  UserController.createFaculty
);

router.post(
  '/create-admin',
  validateRequestHandler(userValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;
