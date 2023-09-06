import mongoose from "mongoose";
const formSchema = new mongoose.Schema(
    {
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        name: String,
        description:{
            type:String,
            default:""
        },
        questions:[{
            open:{type:Boolean,default:false},
            questionText:String,
            options:[{
                optionText:String,
            }]
        }],
        formType:{type:String,default:"anonymous"}
    },
    {timestamps:true}
)
export default mongoose.model('formData',formSchema)