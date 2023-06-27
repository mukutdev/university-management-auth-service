import express from 'express';
import { StudentController } from './student.controller';
import validateRequestHandler from '../../../middlewares/validateRequest';
import { studentValidation } from './student.validation';

const router = express.Router();

//api end-point

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);
router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequestHandler(studentValidation.updateZodStudentSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;
