/* eslint-disable @typescript-eslint/no-explicit-any */
import { userModel } from './user.model';

const createUSer = async (user: any) => {
  const isExist = await userModel.find({ email: user.email });
  if (isExist) {
    console.log('User Exist Already');
  } else {
    const result = await userModel.create(user);
    return result;
  }
};
const loginUSer = async (user: any) => {
  const isExist = await userModel.find({ email: user.email });
  if (isExist) {
    const logged =
      isExist[0].email === user.email && isExist[0].password === user.password;
    if (logged) {
      return;
    } else {
      throw new Error('Not MAtched');
    }
  } else {
    throw new Error('Not MAtched');
  }
};

export const userService = {
  createUSer,
  loginUSer,
};
