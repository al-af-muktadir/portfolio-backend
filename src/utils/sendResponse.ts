import { Response } from 'express';

type TProject<T> = {
  statusCode: number;
  message: string;
  data: T | T[] | null;
};

export const sendResponse = <T>(res: Response, data: TProject<T>) => {
  return res.status(data.statusCode).send({
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};
