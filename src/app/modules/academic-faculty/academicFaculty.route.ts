import express from 'express';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

//api end-point

router.post(
  '/create-faculty',
  validateRequestHandler(academicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createAcademicFaculty
);
router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.patch('/:id', AcademicFacultyController.updateFaculty);
router.delete('/:id', AcademicFacultyController.deleteFaculty);
router.get('/', AcademicFacultyController.getAllFaculty);

export const AcademicFacultyRoutes = router;
