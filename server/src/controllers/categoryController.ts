import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/models';
import { ErrorHandler } from '../error/ErrorHandler';
import { validationResult } from 'express-validator';

class CategoryConstroller {
  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const categories = await Category.findAll();
      res.json({status: 'success', data: categories});
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
      const category = await Category.create({name});

      res.json({status: 'success', data: category});
    } catch (error) {
      console.log(error);
    }
  }
}

export const categoryController = new CategoryConstroller();