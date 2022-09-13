import JwtToken from '../interfaces/JwtToken';
import IUser from '../interfaces/User';
import User from '../models/User';
import jwtUtils from '../utils/jwt.utils';

export default {
  create: async (user: IUser): Promise<JwtToken> => {
    const userId = await User.create(user);
    return jwtUtils({ ...user, id: userId });
  },
};
