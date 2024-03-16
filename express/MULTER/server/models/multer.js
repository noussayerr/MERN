const mongoose=require('mongoose')


const multerSchema=new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "First name is required"]
      },
    photo:{
      type:String
    }

}, {timestamps: true});
const multer=mongoose.model("multer",multerSchema)
  module.exports=multer