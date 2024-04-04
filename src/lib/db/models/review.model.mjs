import mongoose, { Schema } from 'mongoose';

mongoose.set('runValidators', true);

// Vores produkt Model
const reviewSchema = new Schema({
    name: {type: String},
    byline: {type: String},
    description: {type: String},
    image: {type: String, default:"/reviews/dummy.jpg"}
})

export default mongoose.models.review || mongoose.model('review', reviewSchema);
