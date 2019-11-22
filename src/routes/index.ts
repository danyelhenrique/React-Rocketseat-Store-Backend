import { Router } from 'express'

import StockController from '../api/controllers/StockController'

const router = Router()

// router.use('/api')

router.get('/stock', StockController.index)

export default router
