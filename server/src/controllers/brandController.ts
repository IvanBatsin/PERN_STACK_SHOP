import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../error/ErrorHandler';
import { Brand } from '../models/models';

class BrandController {
  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const brands = await Brand.findAll();
      res.json({status: 'success', data: brands});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }

  create = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ErrorHandler(400, errors.array()[0].msg));
      }

      const {name} = req.body;
      const brand = await Brand.create({name});

      res.json({status: 'success', data: brand});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }
}

export const brandController = new BrandController();