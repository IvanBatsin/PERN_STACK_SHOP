import { NextFunction, Response, Request } from "express";
import { ErrorHandler } from "../error/ErrorHandler";
import jwt from 'jsonwebtoken';
import { UserProps as TokenUser } from "../models/modelInterfaces";
import { Roles } from "../interfaces/roles";

export const checkRole = (role: Roles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method === 'OPTIONS') {
        next();
      }
  
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        next(new ErrorHandler(401, 'Unathorized'));
      }
  
      const decode = jwt.verify(token!, process.env.JWT_STRING!) as TokenUser;
      if (decode.role !== role) {
        next(new ErrorHandler(403, 'No Access'))
      }
      
      req.user = decode;
      next();
    } catch (error) {
      next(new ErrorHandler());
    }
  }
}