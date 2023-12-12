
 const mongoose = require('mongoose');

 const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    price: Number
  });
 
 const Product = mongoose.model('Product', productSchema);
 module.exports = Product