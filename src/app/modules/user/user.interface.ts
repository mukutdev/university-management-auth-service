/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange?: true | false;
  student: Types.ObjectId | IStudent;
  faculty: Types.ObjectId | IFaculty;
  admin: Types.ObjectId | IAdmin;
};

export type IUserMethods = {
  isUserExists(id: string): Promise<Partial<IUser> | null>;
  isPasswordMatched(
    givenPassWord: string,
    savedPassword: string
  ): Promise<boolean>;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
