import { ValidationError } from 'joi';
import JwtToken from '../interfaces/JwtToken';
import IUser from '../interfaces/User';
import User from '../models/User';
import jwtUtils from '../utils/jwt.utils';
import UserSchema from '../validations/User.schema';
import UserMessages from '../validations/User.messages';
import { Error } from '../interfaces/Error';

export default {
  create: async (user: IUser): Promise<JwtToken> => {
    const userId = await User.create(user);
    return jwtUtils({ ...user, id: userId });
  },
  login: async (user: IUser): Promise<ValidationError | Error | JwtToken> => {
    const { error } = UserSchema.login.validate(user);
    if (error) return error;

    const retrievedUser = await User.login(user);

    if (!retrievedUser) {
      const err = new Error(UserMessages.invalidLogin) as Error;
      err.statusCode = 401;
      return err;
    }

    return jwtUtils(retrievedUser);
  },
};
