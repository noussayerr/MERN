const product=require("../models/product.models")

module.exports.findAllproduct=(req,res)=>{
    product.find()
    .then((products)=>res.json(products))
    .catch((err)=>console.log(err))
}

module.exports.createpoduct=(req,res)=>{
    product.create(req.body)
    .then((productcreated)=>res.json(productcreated))
    .catch((err)=>console.log(err))
}

module.exports.findOneproduct=(req,res)=>{
    product.findOne({_id:req.params.id})
    .then((productcreated)=>res.json(productcreated))
    .catch((err)=>console.log(err))
}

module.exports.updateProduct=(req,res)=>{
    product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err => res.json(err))
}

module.exports.deleteOne=(req,res)=>{
    product.deleteOne({_id:req.params.id})
    .then(confirmation => res.json(confirmation))
    .catch(err => res.json(err))
}

/*module.exports.deleteAll=(req,res)=>{
    product.deleteMany()
    .then(confirmation => res.json(confirmation))
    .catch(err => res.json(err))
}*/