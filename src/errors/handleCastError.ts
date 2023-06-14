import mongoose from 'mongoose';
import IGenericErrorMessage from '../interfaces/error';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error?.path,
      message: 'invalid Object Id',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast error',
    errorMessages: errors,
  };
};

export default handleCastError;
