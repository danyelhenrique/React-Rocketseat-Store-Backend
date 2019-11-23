import { Router } from 'express'

import StockController from '../api/controllers/StockController'
import Validators from '../validators/stockValidator'

const router = Router()

router.get('/stock', StockController.index)
router.get('/stock/:id', Validators.validateShow, StockController.show)

router.post('/stock', Validators.validateStore, StockController.store)

router.put('/stock/:id', Validators.validateUpdate, StockController.update)

router.delete('/stock/:id', Validators.validateDelete, StockController.delete)

export default router
