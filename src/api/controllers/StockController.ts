import { Request, Response } from 'express'

import Store from '../models/schemmas/Store'

class StockController {
  public async index (req: Request, res: Response): Promise<Response> {
    const data = await Store.find({})

    return res.json({ data })
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const store = await Store.findById(id)

    return res.json({ store })
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { title, price, image, amount } = req.body

    const store = await Store.create({
      title, price, image, amount
    })

    return res.json({ store })
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const store = await Store.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json({ store })
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await Store.findByIdAndRemove(id)

    return res.json({ updated: 'success' })
  }
}

export default new StockController()
