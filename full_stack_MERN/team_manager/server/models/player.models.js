const mongoose=require('mongoose')

const playerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[3,"{PATH} must have at least 3 chars"]
    },
    preferred_position:{
        type:String,
        required:[true,"{PATH} is required"],
        enum:{
            values:["Goalkeeper","Centre-back,Sweeper","Full-back","Wing-back","Central midfielder",
            "Defensive midfielder","Attacking midfielder","Wide midfielder","Second striker","Centre forward","Winger"],
            message:"{VALUE} doesn't exist"
        }
    },
    gameOneStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
          },
    gameTwoStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    },
    gameThreeStatus: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
          },
    
},{timestamps:true})

const player=mongoose.model("player",playerSchema) 
module.exports =player
