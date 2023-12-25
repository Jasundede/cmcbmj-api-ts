import { type NextFunction, type Request, type Response } from 'express'
import {
  addNewBrand,
  deleteBrandById,
  getAllBrand,
  getExistBrand,
  getSingleBrand,
  updateSingleBrand
} from '../services/brand.service'
import { addBrandValidation } from '../validations/brand.validation'

export const getAllBrands = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await getAllBrand()
    res.status(200).json({
      error: null,
      message: 'Get All Brands Success',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/brand.controller.ts : getAllBrands - ' +
          error.message
      )
    )
  }
}

export const registerNewBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = addBrandValidation(req.body)
    const existBrand = await getExistBrand(value.brandCode)

    if (existBrand != null) {
      return res.status(400).json({
        error: 'Data Already Exist',
        message: 'Failed add new Brand',
        data: null
      })
    }
    const newBrand = await addNewBrand(value)
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Failed add new Brand',
        data: null
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Add New Brand Success',
      data: newBrand
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/brand.controller.ts : registerNewBrand - ' +
          error.message
      )
    )
  }
}

export const getBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params

    const data = await getSingleBrand(id)
    if (data != null) {
      return res.status(200).json({
        error: null,
        message: 'Get Brand Data Success',
        data
      })
    }
    return res.status(404).json({
      error: 'Data Not Found',
      message: 'Failed Get Brand Data',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/brand.controller.ts : getBrandById - ' +
          error.message
      )
    )
  }
}

export const delBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params

    const existBrand = await getSingleBrand(id)

    if (existBrand == null) {
      return res.status(404).json({
        error: 'Data Not Found',
        message: 'Failed Delete Data',
        data: null
      })
    }
    const data = await deleteBrandById(id)
    if (data != null) {
      return res.status(200).json({
        error: null,
        message: 'Delete Brand Success',
        data
      })
    }
    return res.status(404).json({
      error: 'Data Not Found',
      message: 'Failed Get Brand Data',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/brand.controller.ts : delBrandById - ' +
          error.message
      )
    )
  }
}

export const updateBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params
    const { error, value } = addBrandValidation(req.body)

    const existBrand = await getSingleBrand(id)

    if (existBrand == null) {
      return res.status(404).json({
        error: 'Data Not Found',
        message: 'Failed Update Data',
        data: null
      })
    }

    const updatedBrand = await updateSingleBrand(id, value)

    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Failed Update Data',
        data: updatedBrand
      })
    }
    return res.status(200).json({
      error: null,
      message: 'Successfully Update Data',
      data: updatedBrand
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error on file src/controllers/ink.controller.ts : updateBrandById - ' +
          error.message
      )
    )
  }
}
