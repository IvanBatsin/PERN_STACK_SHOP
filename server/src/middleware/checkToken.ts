import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../error/ErrorHandler";
import jwt from 'jsonwebtoken';
import { UserProps as TokenUser } from "../models/modelInterfaces";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.method === 'OPTIONS') {
      next();
    }

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      next(new ErrorHandler(401, 'Unathorized'));
    }

    const decode = jwt.verify(token!, process.env.JWT_STRING!);
    req.user = decode as TokenUser;
    next();
  } catch (error) {
    next(new ErrorHandler());
  }
}