const Multer = require("../models/multer")

module.exports ={
    
    create: async (req, res) => {
        
       const photos=req.files
       const arr=[]
       for (let i = 0; i < photos.length; i++){
            arr.push(photos[i].fieldname)
    }
console.log(arr)
    },
    findall : (req,res)=>{
        Multer.find()
        .then(all=>res.json(all))
        .catch((err)=>res.json(err))
    }

      }
