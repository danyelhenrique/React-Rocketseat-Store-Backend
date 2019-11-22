import './config/dotenv'
import mongoUrl from './config/mongoDB'
import mongoose from 'mongoose'

import express from 'express'
import cors from 'cors'
import routes from './routes'

class Server {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(cors({}))
    this.express.use(express.json())
  }

  private database (): void {
    mongoose.connect(mongoUrl,
      { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(_ => console.log('database connection success'))
      .catch(err => console.log(`fail to connection on database ${err}`))
    mongoose.set('useFindAndModify', false)
  }

  private routes (): void {
    this.express.use(routes)
    this.express.get('/', (req, res) => {
      res.send('oi')
    })
  }
}

export default new Server().express
