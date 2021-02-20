import { Router } from 'express';
const router: Router = Router();

import { deviceController } from '../controllers/deviceController';
import { upload } from '../core/multer';
import { deviceValidatorCreate } from '../validation/validator';

router.get('/', deviceController.getAll);
router.post('/', upload.single('image'), deviceValidatorCreate, deviceController.create);
router.get('/:id', deviceController.getById);

export { router };