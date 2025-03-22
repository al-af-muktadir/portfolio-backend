/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TMessage } from './message.interface';
import { MessageModel } from './message.model';

const postMEssageintoDB = async (message: any) => {
  const result = await MessageModel.create(message);
  return result;
};
const getMEssageFromDB = async () => {
  const result = await MessageModel.find();
  return result;
};
export const MessageService = { postMEssageintoDB, getMEssageFromDB };
