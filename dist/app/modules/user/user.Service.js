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
exports.userService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_codes_1 = require("http-status-codes");
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const AppError_1 = require("../../utils/AppError");
const logInUserFromDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield user_model_1.userModel.findOne({ email: user.email });
    // const isPasswordMatched = await bcrypt.compare(
    //   user.password,
    //   userData?.password as string,
    // );
    console.log(config_1.default.access_token_secret);
    if (!((userData === null || userData === void 0 ? void 0 : userData.password) === user.password)) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'You are not Authorized');
    }
    else if (!userData) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.NOT_FOUND, 'User Not Found');
    }
    else {
        const token = jsonwebtoken_1.default.sign({
            email: userData.email,
            role: userData.role,
        }, config_1.default.access_token_secret, { expiresIn: '200d' });
        const refreshToken = jsonwebtoken_1.default.sign({
            email: userData.email,
            role: userData.role,
        }, config_1.default.refresh_token_secret, { expiresIn: '200d' });
        return { token, refreshToken };
    }
});
// const sendrefreshToken = async (token: string) => {
//   if (!token) {
//     throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not Authorized');
//   }
//   const decoded = VerifyToken(token, config.refresh_token_secret as string);
//   const { email } = decoded as JwtPayload;
//   const user = await userModel.findOne({ email: email });
//   if (!user) {
//     throw new AppError(StatusCodes.NOT_FOUND, 'User not Found');
//   }
//   const accesstoken = jwt.sign(
//     {
//       email: user.email,
//       role: user.role,
//     },
//     config.access_token_secret as string,
//     { expiresIn: '200d' },
//   );
//   return {
//     accesstoken,
//   };
// };
exports.userService = {
    logInUserFromDb,
};
