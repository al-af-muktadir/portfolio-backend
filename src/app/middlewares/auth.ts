import { StatusCodes } from 'http-status-codes';
// import { AppError } from '../../Error/AppError';

import config from '../../config';
import { JwtPayload } from 'jsonwebtoken';
// import { userModel } from '../modules/User/user.model';
import catchAsync from '../utils/catchAsync';
import { AppError } from '../utils/AppError';
import { userModel } from '../modules/user/user.model';
import { VerifyToken } from '../utils/verifyToken';

export const auth = (...authRoles: string[]) => {
  // //console.log(authRoles);
  return catchAsync(async (req, res, next) => {
    const Bearertoken = req.headers.authorization as string;

    const token = Bearertoken?.split(' ')[1];

    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not Authorized');
    }

    let decoded;
    try {
      decoded = VerifyToken(token, config.access_token_secret as string);
    } catch (error) {
      throw new AppError(StatusCodes.UNAUTHORIZED, `Not authorized' ${error}`);
    }

    const { email, role } = decoded as JwtPayload;
    //console.log(email, role);

    const user = await userModel.findOne({ email: email });
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'User not Found');
    }

    if (role && !authRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are UnAuthorized');
    }

    req.user = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };
    next();
  });
};
