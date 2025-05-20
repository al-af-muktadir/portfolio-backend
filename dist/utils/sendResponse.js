"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    return res.status(data.statusCode).send({
        success: true,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data,
    });
};
exports.sendResponse = sendResponse;
