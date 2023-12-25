import { Router } from 'express'
import expressAsyncHandler from 'express-async-handler'
import {
  addInk,
  deletInk,
  getAllInks,
  getInkById,
  updateInk
} from '../controllers/ink.controller'

const inkRouter = Router()

inkRouter.get('/', expressAsyncHandler(getAllInks))
inkRouter.post('/', expressAsyncHandler(addInk))
inkRouter.get('/:id', expressAsyncHandler(getInkById))
inkRouter.put('/:id', expressAsyncHandler(updateInk))
inkRouter.delete('/:id', expressAsyncHandler(deletInk))

export default inkRouter
