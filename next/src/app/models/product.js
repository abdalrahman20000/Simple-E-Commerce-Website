const { Schema, model, models } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: String,
  image: String,
  description: String,
}, { timestamps: true });

// Check if the model already exists
const Product = models.Product || model("Product", productSchema);

module.exports = Product;
