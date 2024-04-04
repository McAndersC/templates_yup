import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const productSchema = new Schema({
  title: { type: String, default: null },
  image: { type: String, default: '/products/no-product.jpg' },
  price: { type: Number, default: null },
  discountInPercent: { type: Number, default: 0 },
  recommended: { type: Boolean, default: false },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.product || mongoose.model('product', productSchema);