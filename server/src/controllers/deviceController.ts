import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../error/ErrorHandler';
import { DeviceInfoProps } from '../models/modelInterfaces';
import { Device, DeviceInfo } from '../models/models';
import { queryToString } from '../utils/queryToString';


class DeviceController {
  getAll = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ErrorHandler(400, errors.array()[0].msg));
      }

      let devices;
      const brandId = queryToString(req.query.brandId as string | string[] | undefined);
      const categoryId = queryToString(req.query.categoryId as string | string[] | undefined);
      const limit = +queryToString(req.query.limit as string | string[] | undefined)! || 2;
      const page = +queryToString(req.query.page as string | string[] | undefined)! || 1;

      const offset = limit * page - limit;

      if (!brandId && !categoryId) {
        devices = await Device.findAndCountAll({limit, offset});
      } 

      if (!brandId && categoryId) {
        devices = await Device.findAndCountAll({where: {categoryId}, limit, offset});
      }

      if (brandId && !categoryId) {
        devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
      }

      if (brandId && categoryId) {
        devices = await Device.findAndCountAll({where: {brandId, categoryId}, limit, offset});
      }

      res.json({status: 'success', data: devices});
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

      const {name, price, brandId, info, categoryId} = req.body;
      const file = req.file;
      
      const device = await Device.create({name, price, brandId, categoryId, img: file.filename});

      if (info) {
        const infoArray: DeviceInfoProps[] = JSON.parse(info);
        infoArray.forEach(item => {
          DeviceInfo.create({
            title: item.title,
            description: item.description,
            deviceId: device.id
          });
        });
      }
      res.json({status: 'success', data: device});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void | NextFunction> => {
    try {
      const {id} = req.params;
      const device = await Device.findOne({
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}]
      });
      res.json({status: 'success', data: device});
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler());
    }
  }
}

export const deviceController = new DeviceController();