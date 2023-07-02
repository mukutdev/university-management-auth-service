import { NextFunction, Request, Response } from 'express';
import ApiErrors from '../errors/ApiErrors';
import httpStatus from 'http-status';
import { jwtHelpers } from '../helpers/jwtHelpers';
import config from '../config';
import { Secret } from 'jsonwebtoken';

const auth =
  (...requiresRole: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ApiErrors(
          httpStatus.UNAUTHORIZED,
          'You are not authorized user'
        );
      }

      let verifiedUser = null;
      {
        verifiedUser = jwtHelpers.verifyToken(
          token,
          config.jwt.jwt_refresh_secret as Secret
        );

        req.user = verifiedUser;
        console.log('user', req.user);
        if (requiresRole.length && !requiresRole.includes(verifiedUser.role)) {
          throw new ApiErrors(httpStatus.FORBIDDEN, 'Forbidden');
        }

        next();
      }
    } catch (error) {
      next(error);
    }
  };
export default auth;
