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