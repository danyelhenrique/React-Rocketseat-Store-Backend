import './config/dotenv'
import mongoUrl from './config/mongoDB'
import * as mongoose from 'mongoose'

import * as express from 'express'
import * as cors from 'cors'
import routes from './routes/index'

import Store from '../src/api/models/schemmas/Store'
import data from '../initialData'

class Server {
    public express: express.Application;

    constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.InitialData()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(cors({}))
      this.express.use(express.json())
    }

    private async InitialData (): Promise<any> {
      const x = await Store.insertMany(data)
        .catch(err => console.log(err)
        )
      return x
    }

    private database (): void {
      mongoose.connect(mongoUrl,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
        .then(_ => console.log('database connection success'))
        .catch(err => console.log(`fail to connection on database ${err}`))
      mongoose.set('useFindAndModify', false)
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new Server().express
