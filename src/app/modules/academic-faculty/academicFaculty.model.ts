import { Schema, model } from 'mongoose';
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface';

const academicFacultyModel = new Schema<IAcademicFaculty, AcademicFacultyModel>(
  {
    title: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultyModel
);
