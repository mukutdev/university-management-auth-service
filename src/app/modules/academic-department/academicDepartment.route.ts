import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validations';

const router = express.Router();

router.post(
  '/create-department',
  validateRequestHandler(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createDepartment
);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequestHandler(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.updateDepartment
);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);

router.get('/', AcademicDepartmentController.getAllDepartments);

export const AcademicDepartmentRoutes = router;
