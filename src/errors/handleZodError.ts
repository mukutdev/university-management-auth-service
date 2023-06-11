import { ZodError, ZodIssue } from 'zod';
import { IGenericResponse } from '../interfaces/common';
import IGenericErrorMessage from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorMessages: errors,
  };
};

export default handleZodError;
