import httpStatus from 'http-status';
import ApiErrors from '../../../errors/ApiErrors';
import { AcademicSemesterMapper } from './academicSemester.constant';
import {
  IAcademicSemester,
  IAcademicSemesterFilters,
} from './academicSemester.interface';
import { AcademicSemester } from './acdemicSemester.model';
import { IPaginationOptions } from '../../../interfaces/paginationsOptions';
import { IGenericDataResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationCalculation';
import { SortOrder } from 'mongoose';

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
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericDataResponse<IAcademicSemester[]>> => {
  const { searchTerm } = filters;

  const academicSemesterTitles = ['title', 'code', 'year'];

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: academicSemesterTitles.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.paginationCalculation(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await AcademicSemester.find({ $and: andConditions })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
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
