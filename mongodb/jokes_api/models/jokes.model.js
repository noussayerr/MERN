const mongoose=require("mongoose")

const jokesSchema=new mongoose.Schema({
    setup:{
        type:String,
        required: [true, "{PATH} required"]
    },
    punchline:{
        type:String,
        required: [true, "{PATH} required"]
    }
},{timestamps:true})

const joke=mongoose.model("joke",jokesSchema)
module.exports=joke