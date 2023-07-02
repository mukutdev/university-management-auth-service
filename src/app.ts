import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandlers';
import routes from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});
app.get('/', async (req: Request, res: Response) => {
  res.send('Server working');
});

app.use(globalErrorHandler);

// const academicSemester = {
//   year : '2025',
//   code: "03"
// }

// const testId = async()=>{
//   const getId = await generateFacultyId()
//   console.log(getId)
// }

// testId()

export default app;
