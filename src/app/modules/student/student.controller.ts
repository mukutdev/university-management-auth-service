import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendApiResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { pagination } from '../../../interfaces/pagination';
import { IStudent } from './student.interface';
import { studentFilterAbleFields } from './student.constant';
import { StudentService } from './student.services';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterAbleFields);
  const paginationOptions = pick(req.query, pagination);

  const result = await StudentService.getAllStudents(
    filters,
    paginationOptions
  );
  sendApiResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Data Retrieved Successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentService.getSingleStudent(id);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Retrieved Successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(updatedData);
  const result = await StudentService.updateStudent(id, updatedData);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Updated Successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);
  sendApiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester deleted Successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
