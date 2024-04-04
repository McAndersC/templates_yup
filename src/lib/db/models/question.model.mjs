import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const qandaSchema = new mongoose.Schema({
    question    :   {  
                        type    : String,     
                        default : null 
                    },
    answer      :   { 
                        type    : String, 
                        default : null 
                    },
    created     :   {   
                        type    : Date, 
                        default : new Date() 
                    }
});

export default mongoose.models.question || mongoose.model('question', qandaSchema);