import { Router } from 'express';
import { userColelction } from './user.collection';
import { validateRequest } from '../../middlewares/validateRequest';
import { userLoginValidation } from './auth.validation';
import { auth } from '../../middlewares/auth';

const route = Router();

route.post(
  '/auth/login',

  validateRequest(userLoginValidation),
  userColelction.login,
);

export const userROuter = route;
