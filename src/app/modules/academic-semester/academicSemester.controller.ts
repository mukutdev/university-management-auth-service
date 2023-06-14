import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../interfaces/pagination';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...AcademicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      AcademicSemesterData
    );
    sendApiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
    next();
  }
);

const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, pagination);

    const result = await AcademicSemesterService.getAllSemester(
      paginationOptions
    );
    sendApiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Data Retrieved Successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

//page limit , sortBy , sortOrder

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemester,
};
