import express from 'express';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';
import validateRequestHandler from '../../../middlewares/validateRequest';
const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.get('/', AdminController.getAllAdmins);

router.delete('/:id', AdminController.deleteAdmin);

router.patch(
  '/:id',
  validateRequestHandler(AdminValidation.updateAdmin),
  AdminController.updateAdmin
);

export const AdminRoutes = router;
