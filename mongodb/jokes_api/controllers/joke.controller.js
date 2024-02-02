const joke=require("../models/jokes.model")

module.exports.findalljokes=(req,res)=>{

    joke.find()
    .then((alljokes)=>{res.json(alljokes)
    console.log(hey)})
    .catch(err=>console.log(err))
}

module.exports.createNewjoke =(req,res)=>{

    joke.create(req.body)
    .then((joke) => {
        res.json(joke)
    })
    .catch((err) => {
        res.json(err)
    })
}
