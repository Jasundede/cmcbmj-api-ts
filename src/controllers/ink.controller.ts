import { type NextFunction, type Request, type Response } from 'express'
import {
  addData,
  deleteSingleInk,
  getAllData,
  getInkExist,
  getSingleInk,
  updateSingleInk
} from '../services/ink.service'
import { addInkValidation } from '../validations/ink.validation'

export const getAllInks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await getAllData()

    res.status(200).json({
      error: null,
      message: 'Get All Inks Success',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : getAllInks - ' +
          error.message
      )
    )
  }
}

export const getInkById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const data = await getSingleInk(id)

    if (data != null) {
      return res.status(200).json({
        error: null,
        message: 'Get Ink Data Success',
        data
      })
    }
    return res.status(404).json({
      error: 'Data Not Found',
      message: 'Failed Get Ink Data',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : getInkById - ' +
          error.message
      )
    )
  }
}

export const addInk = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = addInkValidation(req.body)

    const existInk = await getInkExist(value.inkCode)

    if (existInk != null) {
      return res.status(400).json({
        error: 'Data Already Exist',
        message: 'Failed Add New Ink',
        data: null
      })
    }
    const newInk = await addData(value)

    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Failed Add New Ink',
        data: newInk
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Successfully Add New Ink',
      data: newInk
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : addInk - ' +
          error.message
      )
    )
  }
}

export const updateInk = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const { error, value } = addInkValidation(req.body)
    const updatedInk = await updateSingleInk(id, value)

    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Failed Update Data',
        data: updatedInk
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Successfully Update Data',
      data: updatedInk
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : updateInk - ' +
          error.message
      )
    )
  }
}

export const deletInk = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const isExist = await getSingleInk(id)

    if (isExist != null) {
      const deletedInk = await deleteSingleInk(id)

      return res.status(200).json({
        error: null,
        message: 'Successfully Delete Data',
        data: deletedInk
      })
    }
    return res.status(404).json({
      error: 'Data Not Found',
      message: 'Failed Delete Data',
      data: null
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : deletInk - ' +
          error.message
      )
    )
  }
}
