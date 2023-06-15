import catchAsync from '../../../shared/catchAsync';
import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendResponse';
import { AcademicFacultyService } from './academicFaculty.services';
import pick from '../../../shared/pick';
import { academicFacultyFilterAbleFields } from './academicFaculty.constant';
import { pagination } from '../../../interfaces/pagination';

const createAcademicFaculty: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...AcademicFacultyData } = req.body;
    console.log(req.body);
    const result = await AcademicFacultyService.createFaculty(
      AcademicFacultyData
    );
    sendApiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty created successfully',
      data: result,
    });
  }
);

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterAbleFields);
  const paginationOptions = pick(req.query, pagination);

  const result = await AcademicFacultyService.getAllFaculty(
    filters,
    paginationOptions
  );
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Data Retrieved Successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.getSingleFaculty(id);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Retrieved Successfully',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(updatedData);
  const result = await AcademicFacultyService.updateFaculty(id, updatedData);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty Updated Successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicFacultyService.deleteFaculty(id);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted Successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
