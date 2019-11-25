import { Request, Response } from 'express'

import Store from '../models/schemmas/Store'

class StockController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const data = await Store.find({})
      return res.json({ data })
    } catch (error) {
      return res.status(400).json({ error })
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const store = await Store.findById(id)
      return res.json({ store })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { title, price, image, amount } = req.body

    try {
      const store = await Store.create({
        title, price, image, amount
      })

      return res.json({ store })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      const store = await Store.findByIdAndUpdate(id, req.body, {
        new: true
      })
      return res.json({ store })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await Store.findByIdAndRemove(id)
      return res.json({ updated: 'success' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export default new StockController()
