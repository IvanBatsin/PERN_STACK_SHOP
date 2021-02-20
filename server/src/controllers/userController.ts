import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../error/ErrorHandler';
import { Cart, User } from '../models/models';
import bcrypt from 'bcryptjs';
import { createToken } from '../utils/createToken';

class UserController {
  auth = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      if (req.user) {
        const updateToken = createToken(req.user.id, req.user.email, req.user.role);
        res.json({status: 'success', data: updateToken});
      } else {
        return next(new ErrorHandler(403, 'Unauthorized'));
      }
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }

  signup = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ErrorHandler(400, errors.array()[0].msg));
      }

      const {email, password, role} = req.body;
      const condidate = await User.findOne({where: {email}});

      if (condidate) {
        return next(new ErrorHandler(403, 'Email already exists'));
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const user = await User.create({email, role, password: hashPassword});
      await Cart.create({userId: user.id!});

      const token = createToken(user.id!, email, user.role!);

      res.json({status: 'success', data: token});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }

  signin = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ErrorHandler(400, errors.array()[0].msg));
      }

      const {email, password} = req.body;
      const user = await User.findOne({where: {email}});

      if (!user) {
        return next(new ErrorHandler(403, 'User with this email doest exist'));
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return next(new ErrorHandler(403, 'Password is invalid'));
      }
      
      const token = createToken(user.id!, user.email, user.role!);
      res.json({status: 'success', data: token});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }
}

export const userController = new UserController();