const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

const ProductSchema = new mongoose.Schema({
    title: {type: String, minlength:[4, "Title must be atleast 4 characters long"], required:true},
    price: {type: Number, required:[true, "Price is required"]},
    productImage: {type: String, required:[true, "Image is missing"]}
}, {timestamps:true});



module.exports = {Product: mongoose.model('Product', ProductSchema)};