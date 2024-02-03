const joke=require("../models/jokes.model")

//find all

module.exports.findalljokes=(req,res)=>{

    joke.find()
    .then((alljokes)=>res.json(alljokes))
    .catch(err=>console.log(err))
}

//create

module.exports.createNewjoke =(req,res)=>{

    joke.create(req.body)
    .then((joke) => {
        res.json(joke)
    })
    .catch((err) => {
        res.json(err)
    })
}

//one joke

module.exports.findonejokes=(req,res)=>{

    joke.findOne({_id:req.params.id})
    .then((onejokes)=>res.json(onejokes))
    .catch(err=>console.log(err))
}

//update 

module.exports.updatejoke=(req,res)=>{
    joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true ,runValidators:true})
    .then((updatedjoke)=>res.json(updatedjoke))
    .catch(err=>console.log(err))
}

//delete

module.exports.deletejoke=(req,res)=>{
    joke.deleteOne({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
}