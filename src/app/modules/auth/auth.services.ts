import httpStatus from 'http-status';
import ApiErrors from '../../../errors/ApiErrors';
import { User } from '../user/user.schema';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  const user = new User();

  const isUserExist = await user.isUserExists(id);

  if (!isUserExist) {
    throw new ApiErrors(httpStatus.NOT_FOUND, "User doesn't exist");
  }

  if (
    isUserExist.password &&
    !user?.isPasswordMatched(password, isUserExist.password)
  ) {
    throw new ApiErrors(httpStatus.UNAUTHORIZED, "Password doesn't exist");
  }

  const { id: userId, role, needsPasswordChange } = isUserExist;

  console.log('isuser exist', role);
  //create access token & refresh token

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.jwt_secret_key as Secret,
    config.jwt.jwt_expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.jwt_refresh_secret as Secret,
    config.jwt.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  const user = new User();
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.jwt_refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiErrors(httpStatus.FORBIDDEN, 'Invalid refresh token');
  }

  // console.log(verifiedToken)
  const { userId } = verifiedToken;
  const isUserExist = await user.isUserExists(userId);
  if (!isUserExist) {
    throw new ApiErrors(httpStatus.NOT_FOUND, 'User Does Not Exits');
  }

  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.jwt_secret_key as Secret,
    config.jwt.jwt_expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = { loginUser, refreshToken };
