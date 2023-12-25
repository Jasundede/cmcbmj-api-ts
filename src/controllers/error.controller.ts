import { type NextFunction, type Request, type Response } from 'express'
import { logger } from '../utils/winston'

export const errorHandling = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(err)
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Internal Server Error',
    data: null
  })
}

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res
    .status(404)
    .json({ error: 'Page Not Found', message: 'Page Not Found', data: null })
}
