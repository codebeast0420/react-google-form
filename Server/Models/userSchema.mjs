import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: {type: String},
    createdForms: []
   }, {timestamps: true});

   export default mongoose.model('userData',    UserSchema)