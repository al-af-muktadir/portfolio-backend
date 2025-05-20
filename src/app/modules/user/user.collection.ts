import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import { sendResponse } from '../../../utils/sendResponse';
import { userService } from './user.Service';
import config from '../../../config';
import sendRespose from '../../utils/sendResponse';
import { AppError } from '../../utils/AppError';

const login = catchAsync(async (req, res) => {
  const result = await userService.logInUserFromDb(req.body);
  const { refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });
  res.status(StatusCodes.OK).send({
    success: true,
    StatusCode: StatusCodes.OK,
    message: 'User Logged in Succesfully',
    data: result.token,
  });
});

const logOut = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Refresh TOken Not FOund');
  }
  res.clearCookie('refreshToken', { httpOnly: true, secure: true });
  sendRespose(res, {
    statusCode: StatusCodes.OK,
    message: 'LoggedOut',
    data: [],
  });
});

// const refreshToken = catchAsync(async (req, res) => {
//   const result = await userService.sendrefreshToken(req.cookies.refreshToken);
//   res.status(StatusCodes.OK).send({
//     success: true,
//     StatusCode: StatusCodes.OK,
//     message: 'Token retrieevd in Succesfully',
//     data: result,
//   });
// });

export const userColelction = {
  login,
};
