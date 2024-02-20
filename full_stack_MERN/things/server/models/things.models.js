const mongoose=require('mongoose')

const thingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[3,"{PATH} must have at least 3 characters and can not be cake"],
        validate: {
            validator: val => val!="cake",
            message: "{PATH} must have at least 3 characters and can not be 'cake' "
          }
    },
    likes:{
        type:Number,
        default:0
    }
},{timestamps:true})

const thing=mongoose.model("thing",thingSchema) 
module.exports =thing