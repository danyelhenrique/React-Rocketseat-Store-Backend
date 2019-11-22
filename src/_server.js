const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const FAKE_DATA_STOCK = [
  {
    id: 1,
    amount: 3
  },
  {
    id: 2,
    amount: 5
  },
  {
    id: 3,
    amount: 2
  },
  {
    id: 4,
    amount: 1
  },
  {
    id: 5,
    amount: 5
  },
  {
    id: 6,
    amount: 10
  }
]

const FAKE_DATA_PRODUCTS = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
  },
  {
    id: 5,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: 6,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  }
]

app.get('/stock', (req, res, next) => {
  return res.json(FAKE_DATA_STOCK)
})

app.get('/stock/:id', (req, res, next) => {
  const getid = FAKE_DATA_STOCK.find(p => p.id == req.params.id)
  return res.json(getid)
})

app.get('/products', (req, res, next) => {
  return res.json(FAKE_DATA_PRODUCTS)
})
app.get('/products/:id', (req, res, next) => {
  const getid = FAKE_DATA_PRODUCTS.find(p => p.id == req.params.id)
  return res.json(getid)
})

app.listen(3333)
