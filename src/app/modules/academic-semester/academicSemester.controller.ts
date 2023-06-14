import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../interfaces/pagination';
import { academicSemesterFilterAbleFields } from './academicSemester.constant';

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
    const filters = pick(req.query, academicSemesterFilterAbleFields);
    const paginationOptions = pick(req.query, pagination);

    const result = await AcademicSemesterService.getAllSemester(
      filters,
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

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.getSingleSemester(id);
    sendApiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Retrieved Successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemester,
  getSingleSemester,
};
