/* eslint-disable jest/expect-expect */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoUrl from '../src/config/mongoDB'
import app from '../src/server'
import request from 'supertest'
import factory from '../utils/factories'

import { MongoClient } from 'mongodb'
let connection
let db: any

beforeAll(async () => {
  connection = await MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  db = await connection.db()
})

afterAll(async () => {
  await connection.close()
})

beforeEach(async () => {
  await db.collection('store').deleteMany({})
})

describe('StockController', function () {
  it('responds status 200 StockController[index]', async function () {
    const response = await request(app)
      .get('/stock')
      .set('Accept', 'application/json')

    expect(response.status).toBe(200)
  })

  it('responds status 200 StockController[show]', async function () {
    const data: any = await factory.create('Store')

    const response = await request(app)
      .post('/stock')
      .set('Accept', 'application/json')
      .send(data)

    expect(response.status).toBe(200)
  })

  it('responds status 400 with no data informed StockController[show]', async function () {
    const response = await request(app)
      .post('/stock')
      .set('Accept', 'application/json')
      .send()

    expect(response.status).toBe(400)
  })

  it('responds status 400 with wrong data informed StockController[show]', async function () {
    const data: any = {
      amount: '22,e5',
      image: 'http://',
      price: '22a,5',
      title: 1
    }

    const response = await request(app)
      .post('/stock')
      .set('Accept', 'application/json')
      .send(data)

    expect(response.status).toBe(400)
  })

  it('responds status 200 and created data in database StockController[show]', async function () {
    const store = db.collection('store')
    const data: any = await factory.create('Store')

    const response = await request(app)
      .post('/stock')
      .set('Accept', 'application/json')
      .send(data)

    expect(response.body.store.title).toBe(data.title)
  })
})
