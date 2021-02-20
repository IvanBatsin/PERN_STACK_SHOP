import { Router } from 'express';
const router: Router = Router();

import { userController } from '../controllers/userController';
import { userSignUp } from '../validation/validator';
import { authCheck } from '../middleware/checkToken';

router.post('/signup', userSignUp, userController.signup);
router.post('/signin', userSignUp, userController.signin);
router.get('/auth', authCheck, userController.auth);

export { router };