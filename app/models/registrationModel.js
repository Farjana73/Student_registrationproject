import mongoose from "mongoose";


const registrationSchema = new mongoose.Schema({
    email:{type:String, require:true, unique:true},
    name:{type:String, require:true},
    password:{type:String, require:true},
    otp:{type:String, default:'0'},
},{

    timestamps:true,
    versionKey:false


})

const studentModel = mongoose.model('students', registrationSchema);

export default studentModel;