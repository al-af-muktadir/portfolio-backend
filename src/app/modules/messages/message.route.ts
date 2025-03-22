import express from 'express';
import { MessageController } from './message.controller';

const route = express.Router();

route.post('/messages', MessageController.postMessage);
route.get('/messages', MessageController.getMessage);

export const MessageRoute = route;
