const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    
    title:{
        type:String,
        required :[true,"{path} is required"]
    },
    price:{
        type:Number,
        required:[true,"{path} is required"]

    },
    description:{
        type:String,
        required:[true,"{path} is required"]
    }
},{timestamps:true})

const product=mongoose.model("product",productSchema)
module.exports=product