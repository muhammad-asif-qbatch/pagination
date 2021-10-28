const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    asin: {
        type: String
    },
    name: {
        type: String,
        minlength: 2
    },
    origin: {
        type: String
    },
});

// Now, we will create a new collection
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;