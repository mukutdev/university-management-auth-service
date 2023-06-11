import config from '../../../config';
import ApiErrors from '../../../errors/ApiErrors';
import { IUser } from './user.interface';
import { User } from './user.schema';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Set default user password if not provided
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const id = await generateUserId();
  user.id = id;

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiErrors(400, 'failed to create user');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
