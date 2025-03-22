import { model, Schema } from 'mongoose';
import { TMessage } from './message.interface';

const MessageSchema = new Schema<TMessage>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

export const MessageModel = model<TMessage>(
  'message-collection',
  MessageSchema,
);
