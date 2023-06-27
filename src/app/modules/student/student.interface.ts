import { Model, Types } from 'mongoose';

import { IAcademicSemester } from '../academic-semester/academicSemester.interface';
import { IAcademicDepartment } from '../academic-department/academicDepartment.interfaces';
import { IAcademicFaculty } from '../academic-faculty/academicFaculty.interface';

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: 'A+' | 'AB+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  academicSemester: Types.ObjectId | IAcademicSemester;
  academicDepartment: Types.ObjectId | IAcademicDepartment;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  contactNo?: string;
  email?: string;
  emergencyContactNo?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

// export type IStudentFilters = {
//   searchTerm: string;
// };
