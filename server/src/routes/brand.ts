import { Router } from 'express';
const router: Router = Router();

import { brandController } from '../controllers/brandController';
import { brandValidatorCreate } from '../validation/validator';

router.get('/', brandController.getAll);
router.post('/', brandValidatorCreate, brandController.create);

export { router };