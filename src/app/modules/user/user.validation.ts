import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

const createZodUserSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({ required_error: 'firstName is required' }),
        middleName: z.string({}).optional(),
        lastName: z.string({ required_error: 'lastName is required' }),
      }),
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'gender is required',
      }),
      dateOfBirth: z.string({ required_error: 'dateOfBirth is required' }),
      email: z.string({ required_error: 'email is required' }).email(),
      contactNo: z.string({ required_error: 'contactNo is required' }),
      emergencyContactNo: z.string({
        required_error: 'emergencyContactNo is required',
      }),
      presentAddress: z.string({
        required_error: 'presentAddress is required',
      }),
      permanentAddress: z.string({
        required_error: 'permanentAddress is required',
      }),
      bloodGroup: z
        .enum([...bloodGroup] as [string, ...string[]], {
          required_error: 'Blood Group is required',
        })
        .optional(),
      guardian: z.object({
        fatherName: z.string({ required_error: 'fatherName is required' }),
        fatherOccupation: z.string({
          required_error: 'fatherOccupation is required',
        }),
        fatherContactNo: z.string({
          required_error: 'fatherContactNo is required',
        }),
        motherName: z.string({ required_error: 'motherName is required' }),
        motherOccupation: z.string({
          required_error: 'motherOccupation is required',
        }),
        motherContactNo: z.string({
          required_error: 'motherContactNo is required',
        }),
        address: z.string({ required_error: 'address is required' }),
      }),
      localGuardian: z.object({
        name: z.string({ required_error: 'name is required' }),
        occupation: z.string({ required_error: 'occupation is required' }),
        contactNo: z.string({ required_error: 'contactNo is required' }),
        address: z.string({ required_error: 'address is required' }),
      }),
      profileImage: z.string({}).optional(),
      academicSemester: z.string({
        required_error: 'academicSemester is required',
      }),
      academicDepartment: z.string({
        required_error: 'academicDepartment is required',
      }),
      academicFaculty: z.string({
        required_error: 'academicFaculty is required',
      }),
    }),
  }),
});

export const userValidation = { createZodUserSchema };
