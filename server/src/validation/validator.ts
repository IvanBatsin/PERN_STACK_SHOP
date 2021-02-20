import { body, query } from 'express-validator';

export const categoryValidatorCreate = [
  body('name', 'Name is required')
    .isString().withMessage('Name format is invalid')
    .notEmpty().withMessage('Name is required')
];

export const brandValidatorCreate = [
  body('name', 'Name is required')
    .isString().withMessage('Name format is invalid')
    .notEmpty().withMessage('Name is required')
];

export const deviceValidatorCreate = [
  // body('name', 'Name is required')
  //   .isString().withMessage('Name format is invalid')
  //   .notEmpty().withMessage('Name is required'),
  
  // body('price', 'Price is required')
  //   .isNumeric().withMessage('Price formatt is invalid')
  //   .notEmpty().withMessage('Price is required'),

  // body('brandId', 'BrandId is required')
  //   .isNumeric().withMessage('BrandId formatt is invalid')
  //   .notEmpty().withMessage('BrandId is required'),

  // body('typeId', 'TypeID is required')
  //   .isNumeric().withMessage('TypeID formatt is invalid')
  //   .notEmpty().withMessage('TypeID is required'),

  // body('info', 'Info is required')
  //   .isString().withMessage('Info format is invalid')
  //   .notEmpty().withMessage('Info is required'),
];

export const userSignUp = [
  body('email', 'Email is required')
    .isEmail().withMessage('Email incorrect')
    .isString().withMessage('Email must be string')
    .notEmpty().withMessage('Email is required'),

  body('password', 'Password is required')
    .isString().withMessage('Password must be string')
    .notEmpty().withMessage('Password is required')
];