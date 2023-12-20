// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  manufactName: { type: String, required: true },
  descr: { type: String, required: true },
  qty: { type: String, required: true },
  barcode: { type: Buffer },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
