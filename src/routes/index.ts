import { Router } from 'express'

import StockController from '../api/controllers/StockController'

const router = Router()

router.get('/stock', StockController.index)
router.get('/stock/:id', StockController.show)

router.post('/stock', StockController.store)
router.post('/stock/:id', StockController.update)

router.delete('/stock/:id', StockController.delete)

export default router
