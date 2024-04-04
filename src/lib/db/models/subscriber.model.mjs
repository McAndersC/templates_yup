import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const subscriberSchema = new Schema({
  name: { type: String, default: null },
  email: { type: String, default: null, unique: true},
  message: { type: String, default: null },
  validated : { type : Boolean, default: false },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.subscriber || mongoose.model('subscriber', subscriberSchema);