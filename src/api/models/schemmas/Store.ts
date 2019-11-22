import { Document, model, Schema } from 'mongoose'

interface Sechema extends Document{
  title?: string,
  string?: string,
  price?: number,
  image?: string,
  amount: number
}

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

export default model<Sechema>('store', storeSchema)
