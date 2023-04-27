import { Router } from 'express';
import contactRouter from './contact';

export default (): Router => {
  const app = Router();

  app.use('/contact', contactRouter);

  return app;
};
