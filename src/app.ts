import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandlers';
import routes from './app/routes';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Server working');
});

app.use(globalErrorHandler);

export default app;
