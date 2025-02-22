const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  price: Number,
  category: {
    type: String,
    enum: ['computers', 'phones', 'electronics'],
    default: 'electronics',
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
