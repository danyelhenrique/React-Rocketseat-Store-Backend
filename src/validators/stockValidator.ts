import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

class ValidatorStock {
  public async validateShow (req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const schema = yup.object().shape({
      id: yup.string().required()
    })

    try {
      await schema.validate(req.body)
    } catch (error) {
      return res.json({ error })
    }

    return next()
  }

  public async validateStore (req: Request, res: Response, next: Function): Promise<Response | void> {
    const schema = yup.object().shape({
      title: yup.string().required(),
      price: yup.string().required(),
      image: yup.string().required(),
      amount: yup.string()
    })

    try {
      await schema.validate(req.body)
    } catch (error) {
      return res.status(400).json({ error })
    }

    return next()
  }

  public async validateUpdate (req: Request, res: Response, next: Function): Promise<Response | void> {
    const schema = yup.object().shape({
      id: yup.string().required()
    })

    try {
      await schema.validate(req.params)
    } catch (error) {
      return res.json({ error }).status(400)
    }

    return next()
  }

  public async validateDelete (req: Request, res: Response, next: Function): Promise<Response | void> {
    const schema = yup.object().shape({
      id: yup.string().required()
    })

    try {
      await schema.validate(req.params)
    } catch (error) {
      return res.json({ error })
    }

    return next()
  }
}

export default new ValidatorStock()
