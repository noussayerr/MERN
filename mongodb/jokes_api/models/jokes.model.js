const mongoose=require("mongoose")

const jokesSchema=new mongoose.Schema({
    setup:{
        type:String
    },
    punchline:{
        type:String
    }
})

const joke=mongoose.model("joke",jokesSchema)
module.exports=joke