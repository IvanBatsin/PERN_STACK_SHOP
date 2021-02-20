import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '../', '.env')});

import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

import cors from 'cors';
import { router } from './routes';
import { ErrorHandler } from './error/ErrorHandler';
 
// DB 
import { db } from './db';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './static')));

app.use('/api', router);

app.use((error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status).json({message: error.message});
});

const start = async (): Promise<void> => {
  try {
    await db.authenticate(); // connect to db
    await db.sync(); // сверяет состояние базы данных со схемой
    app.listen(process.env.PORT || 3000, () => console.log('we on air'));
  } catch (error) {
    console.log(error);
  }
}

start();