"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TMessage } from './message.interface';
const message_model_1 = require("./message.model");
const postMEssageintoDB = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.MessageModel.create(message);
    return result;
});
const getMEssageFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.MessageModel.find();
    return result;
});
exports.MessageService = { postMEssageintoDB, getMEssageFromDB };
