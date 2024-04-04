import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const orderSchema = new Schema({
  products: { type: Array, default: null },
  email: { type: String, default: null },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.order || mongoose.model('order', orderSchema);
