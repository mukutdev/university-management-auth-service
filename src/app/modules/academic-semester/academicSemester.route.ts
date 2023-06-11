import express from 'express';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

//api end-point

router.post(
  '/create-semester',
  validateRequestHandler(academicSemesterValidation.createSemesterZodSchema),
  AcademicSemesterController.createAcademicSemester
);

export const AcademicSemesterRoutes = router;
