import { type NextFunction, type Request, type Response } from 'express'
import { inputBarangValidation } from '../validations/barang.validation'

export const getAllBarang = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const data = [
      {
        id: 1,
        name: 'test',
        qty: 1,
        price: 100
      },
      {
        id: 2,
        name: 'tes2',
        qty: 1,
        price: 100
      },
      {
        id: 3,
        name: 'tes3',
        qty: 1,
        price: 100
      }
    ]

    res.status(200).json({
      error: null,
      message: 'Hello World',
      data
    })
  } catch (error: Error | any) {
    next(new Error('Failed Get All Barang: ' + error.message))
  }
}

export const insertBarang = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const { error, value } = inputBarangValidation(req.body)

    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Failed Add New Barang',
        data: value
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Successfully Add New Barang',
      data: value
    })
  } catch (error: Error | any) {
    next(new Error('Failed Insert New Barang: ' + error.message))
  }
}
