import { Request, Response } from 'express'

import Store from '../models/schemmas/Store'

class StockController {
  public async index (req: Request, res: Response): Promise<Response> {
    console.log('oi')

    let data
    try {
      data = await Store.find({})
    } catch (error) {
      console.log('error,', error)
    }

    return res.json({ data })
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { title, price, image, amount } = req.body

    const store = await Store.create({
      title, price, image, amount
    })

    return res.json({ store })
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const store = await Store.findById(id)

    return res.json({ store })
  }
}

export default new StockController()
