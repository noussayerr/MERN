const thing=require("../models/things.models")

module.exports.allthings=(req,res)=>{
    thing.find().sort({"likes":-1})
    .then(allthings=>res.json(allthings))
    .catch((err)=>res.json(err))
}

module.exports.findOnething=(req,res)=>{
    thing.findOne({_id:req.params.id})
    .then((thing)=>res.json(thing))
    .catch((err)=>console.log(err))
}

module.exports.creatething=(req,res)=>{
    thing.create(req.body)
    .then(createdthing=>res.status(200).json(createdthing ))
    .catch((err)=>res.status(400).json(err))
}

module.exports.deletething=(req,res)=>{
    thing.deleteOne({_id:req.params.id})
    .then(deletedthing=>res.json(deletedthing))
    .catch((err)=>res.json(err))
}   

module.exports.updatething = (req, res) => {
    thing.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators:true,
    })
      .then((updatedthing) =>res.status(200).json(updatedthing))
      .catch((err)=>res.status(400).json(err))
  };