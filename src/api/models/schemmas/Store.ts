import mongoose from 'mongoose'
const Schema = mongoose.Schema

const storeSchema = new Schema({
  title: {
    type: String
  },
  price: {
    type: Number
  },
  image: { type: String },
  amount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('store', storeSchema)
