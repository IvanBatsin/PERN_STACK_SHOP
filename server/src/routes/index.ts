import { Router } from 'express';
const router: Router = Router();

// Routers
import { router as brandRouter } from './brand';
import { router as deviceRouter } from './device';
import { router as categoryRouter } from './category';
import { router as userRouter } from './user';

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/category', categoryRouter);
router.use('/device', deviceRouter);

export { router };