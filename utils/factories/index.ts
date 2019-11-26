import factory from 'factory-girl'
import faker from 'faker'
import Store from '../../src/api/models/schemmas/Store'

factory.define('Store', Store, {
  title: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.fashion(),
  amount: faker.finance.amount()
})

export default factory
