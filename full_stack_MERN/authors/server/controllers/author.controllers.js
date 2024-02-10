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
    .then(createdAuthor=>res.json(createdAuthor))
    .catch((err)=>res.json(err))
}

module.exports.updateAuthor=(req,res)=>{
    author.findOneAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .then(updatedAuthor=>res.json(updatedAuthor))
    .catch((err)=>res.json(err))
}

module.exports.deleteAuthor=(req,res)=>{
    author.deleteOne({_id:req.params.id})
    .then(deletedAuthor=>res.json(deletedAuthor))
    .catch((err)=>res.json(err))
}
