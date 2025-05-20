/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import { userModel } from './user.model';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import bcrypt from 'bcrypt';
import { AppError } from '../../utils/AppError';
const logInUserFromDb = async (user: any) => {
  const userData = await userModel.findOne({ email: user.email });
  // const isPasswordMatched = await bcrypt.compare(
  //   user.password,
  //   userData?.password as string,
  // );
  console.log(config.access_token_secret);
  if (!(userData?.password === user.password)) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not Authorized');
  } else if (!userData) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User Not Found');
  } else {
    const token = jwt.sign(
      {
        email: userData.email,
        role: userData.role,
      },
      config.access_token_secret as string,
      { expiresIn: '200d' },
    );
    const refreshToken = jwt.sign(
      {
        email: userData.email,
        role: userData.role,
      },
      config.refresh_token_secret as string,
      { expiresIn: '200d' },
    );
    return { token, refreshToken };
  }
};

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
export const userService = {
  logInUserFromDb,
};
