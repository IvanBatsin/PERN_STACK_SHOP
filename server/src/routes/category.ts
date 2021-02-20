import { Router } from 'express';
const router: Router = Router();

import { categoryController } from '../controllers/categoryController';
import { categoryValidatorCreate } from '../validation/validator';
import { checkRole } from '../middleware/checkUserRole';
import { Roles } from '../interfaces/roles';

router.get('/', categoryController.getAll);
router.post('/', checkRole(Roles.ADMIN), categoryValidatorCreate, categoryController.create);

export { router };