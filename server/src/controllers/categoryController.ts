import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/models';
import { ErrorHandler } from '../error/ErrorHandler';
import { validationResult } from 'express-validator';

class CategoryConstroller {
  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const types = await Category.findAll();
      res.json({status: 'success', data: types});
    } catch (error) {
      console.log(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ErrorHandler(400, errors.array()[0].msg));
      }

      const {name} = req.body;
      const type = await Category.create({name});

      res.json({status: 'success', data: type});
    } catch (error) {
      console.log(error);
    }
  }
}

export const categoryController = new CategoryConstroller();