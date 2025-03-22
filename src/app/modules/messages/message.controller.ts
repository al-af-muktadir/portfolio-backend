import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../../utils/catchAsync';
import { sendResponse } from '../../../utils/sendResponse';
import { MessageService } from './message.services';

const postMessage = catchAsync(async (req, res) => {
  const result = await MessageService.postMEssageintoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Posted Succesfully',

    data: result,
  });
});
const getMessage = catchAsync(async (req, res) => {
  const result = await MessageService.getMEssageFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'REtrived Succesfully',

    data: result,
  });
});

export const MessageController = { postMessage, getMessage };
