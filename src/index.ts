import * as dotenv from './config/dotenv'

import express from './server'

const PORT = process.env.PORT || 3333

express.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
