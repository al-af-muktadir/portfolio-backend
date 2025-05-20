"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoute = void 0;
const express_1 = __importDefault(require("express"));
const message_controller_1 = require("./message.controller");
const route = express_1.default.Router();
route.post('/messages', message_controller_1.MessageController.postMessage);
route.get('/messages', message_controller_1.MessageController.getMessage);
exports.MessageRoute = route;
