import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const userSchema = new Schema<Tuser>({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    enum: ['admin'],
    type: String,
  },
});

export const userModel = model<Tuser>('user-collection', userSchema);
