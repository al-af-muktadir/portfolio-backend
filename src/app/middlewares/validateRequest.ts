import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

// import { NextFunction, Request } from 'express';

export const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    schema.parseAsync(req.body);
    next();
  });
};
