import { Router } from 'express'
import expressAsyncHandler from 'express-async-handler'
import {
  delBrandById,
  getAllBrands,
  getBrandById,
  registerNewBrand,
  updateBrandById
} from '../controllers/brand.controller'

const brandRouter = Router()

brandRouter.get('/', expressAsyncHandler(getAllBrands))
brandRouter.post('/', expressAsyncHandler(registerNewBrand))
brandRouter.get('/:id', expressAsyncHandler(getBrandById))
brandRouter.delete('/:id', expressAsyncHandler(delBrandById))
brandRouter.put('/:id', expressAsyncHandler(updateBrandById))

export default brandRouter
