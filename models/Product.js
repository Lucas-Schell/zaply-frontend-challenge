const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, 'Please add a product ID']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  categories: {
    type: String,
    required: [true, 'Please add a category']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  brand: {
    type: String,
    required: [true, 'Please add a brand']
  },
})

module.exports = mongoose.models?.Product || mongoose.model('Product', ProductSchema);
