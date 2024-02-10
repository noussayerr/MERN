const author=require('../models/author.models')

module.exports.allAuthors=(req,res)=>{
    author.find()
    .then(allauthor=>res.json(allauthor))
    .catch((err)=>res.json(err))
}

module.exports.oneAuthor=(req,res)=>{
    author.findOne({_id:req.params.id})
    .then(oneAuthor=>res.json(oneAuthor))
    .catch((err)=>res.json(err))
}

module.exports.createAuthor=(req,res)=>{
    author.create(req.body)
    .then(createdAuthor=>res.status(200).json(createdAuthor))
    .catch((err)=>res.status(400).json(err))
}

module.exports.updateAuthor=(req,res)=>{
    author.findOneAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .then(updatedAuthor=>res.status(200).json(updatedAuthor))
    .catch((err)=>res.status(400).json(err))
}

module.exports.deleteAuthor=(req,res)=>{
    author.deleteOne({_id:req.params.id})
    .then(deletedAuthor=>res.json(deletedAuthor))
    .catch((err)=>res.json(err))
}
