import { NextFunction, Request, Response, Router } from 'express';
import Logger from '../../loaders/logger';
import database from '../../loaders/database';

const contactRouter = Router();

contactRouter.post('/', handleUpload);

async function handleUpload(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, number, subject, email, message } = req.body;

    const db = await database();
    const collection = db.collection('users');
    const id = await collection.insertOne({
      name,
      number,
      subject,
      email,
      message,
    });

    res.status(200).json({ id, message: 'contacted successfully' });
  } catch (err: any) {
    Logger.error(err.error);
    res
      .status(err.code || 503)
      .json({ success: false, message: err.error || 'ISR' });
  }
}

export default contactRouter;
