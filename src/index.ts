import './config/dotenv'
import express from './server'

const PORT = process.env.PORT || 3001

express.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
