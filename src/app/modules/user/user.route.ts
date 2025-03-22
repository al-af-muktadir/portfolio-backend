import { Router } from 'express';
import { userColelction } from './user.collection';

const route = Router();
route.post('/register', userColelction.regUser);
route.post('/login', userColelction.login);

export const userROuter = route;
