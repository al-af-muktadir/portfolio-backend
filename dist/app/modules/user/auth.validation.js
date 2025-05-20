"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidation = exports.userLoginValidation = exports.refreshTokenValidation = void 0;
const zod_1 = require("zod");
exports.refreshTokenValidation = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'REfresh Token Required',
        }),
    }),
});
const userValidationSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: 'email is Required' }).email(),
    name: zod_1.z
        .string({ required_error: 'name is Required' })
        .min(3, { message: 'atleast 3 charecter' }),
    password: zod_1.z.string({ required_error: 'password is Required' }),
    image: zod_1.z.string({ required_error: 'image is Required' }),
});
exports.userLoginValidation = userValidationSchema.pick({
    email: true,
    password: true,
});
exports.updateValidation = zod_1.z.object({
    password: zod_1.z.string({ required_error: 'password is Required' }),
});
