import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import { sendResponse } from '../../../utils/sendResponse';
import { userService } from './user.Service';

const regUser = catchAsync(async (req, res) => {
  const result = await userService.createUSer(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User Created Succesfully',
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = await userService.loginUSer(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User Logged Succesfully',
    data: result,
  });
});
export const userColelction = {
  regUser,
  login,
};
