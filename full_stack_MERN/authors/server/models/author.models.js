const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"{path} is required"],
        minLength:[3,"{path} must have at least 3 chars"]
    }
},{timestamps:true})

const author=mongoose.model("author",authorSchema) 
module.exports =author
