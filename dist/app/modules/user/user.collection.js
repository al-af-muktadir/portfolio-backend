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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userColelction = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../../utils/catchAsync");
const user_Service_1 = require("./user.Service");
const config_1 = __importDefault(require("../../../config"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const AppError_1 = require("../../utils/AppError");
const login = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('sdasdsd');
    const result = yield user_Service_1.userService.logInUserFromDb(req.body);
    const { refreshToken } = result;
    res.cookie('refreshToken', refreshToken, {
        secure: config_1.default.node_env === 'production',
        httpOnly: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).send({
        success: true,
        StatusCode: http_status_codes_1.StatusCodes.OK,
        message: 'User Logged in Succesfully',
        data: result.token,
    });
}));
const logOut = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Refresh TOken Not FOund');
    }
    res.clearCookie('refreshToken', { httpOnly: true, secure: true });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'LoggedOut',
        data: [],
    });
}));
// const refreshToken = catchAsync(async (req, res) => {
//   const result = await userService.sendrefreshToken(req.cookies.refreshToken);
//   res.status(StatusCodes.OK).send({
//     success: true,
//     StatusCode: StatusCodes.OK,
//     message: 'Token retrieevd in Succesfully',
//     data: result,
//   });
// });
exports.userColelction = {
    login,
};
