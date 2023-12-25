import { Router } from 'express'
import barangRouter from './barang.route'
import inkRouter from './ink.route'
import { errorHandling, notFound } from '../controllers/error.controller'
import brandRouter from './brand.route'

const app = Router()

app.use('/api', barangRouter)
app.use('/api/ink', inkRouter)
app.use('/api/brand', brandRouter)
app.use('*', errorHandling)
app.use('*', notFound)

export default app
