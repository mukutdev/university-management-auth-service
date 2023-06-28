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

const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
        middleName: z.string().optional(),
      }),
      gender: z.string({
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),
      bloodGroup: z
        .string({
          required_error: 'Blood group is required',
        })
        .optional(),
      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),

      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),
      designation: z.string({
        required_error: 'Designation is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
        middleName: z.string().optional(),
      }),

      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),

      gender: z.string({
        required_error: 'Gender is required',
      }),

      bloodGroup: z.string({
        required_error: 'Blood group is required',
      }),

      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),

      contactNo: z.string({
        required_error: 'Contact number is required',
      }),

      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),

      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),

      managementDepartment: z.string({
        required_error: 'Management department is required',
      }),

      designation: z.string({
        required_error: 'Designation is required',
      }),

      profileImage: z.string().optional(),
    }),
  }),
});

export const userValidation = {
  createZodUserSchema,
  createFacultyZodSchema,
  createAdminZodSchema,
};
