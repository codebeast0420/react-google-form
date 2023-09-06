import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({

    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formData'
    },
  
    userId: {
      type: String    
    },
  
    response : [{
        questionId: String,
        optionId: String,
    }],
    
   }, {timestamps: true});

   export default mongoose.model('responseData',    ResponseSchema)