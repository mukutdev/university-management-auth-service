import httpStatus from 'http-status';
import ApiErrors from '../../../errors/ApiErrors';
import { AcademicSemesterMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './acdemicSemester.model';
import { IPaginationOptions } from '../../../interfaces/paginationsOptions';
import { IGenericDataResponse } from '../../../interfaces/common';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (AcademicSemesterMapper[payload.title] !== payload.code) {
    throw new ApiErrors(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemester = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericDataResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page: page,
      limit: limit,
      total: total,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
};
