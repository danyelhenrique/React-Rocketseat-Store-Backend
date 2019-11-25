import app from '../../src/server'
import request from 'supertest'

describe('GET /user', function () {
  it('responds with json', function (done) {
    const x = request(app)
      .get('/stock')
      .set('Accept', 'application/json')
      .expect(200, done)

  })
})
