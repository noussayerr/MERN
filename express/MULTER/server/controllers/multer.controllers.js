const Multer = require("../models/multer")

module.exports ={
    
    create: async (req, res) => {
        
        
        console.log(req.file.filename)

    },
    findall : (req,res)=>{
        Multer.find()
        .then(all=>res.json(all))
        .catch((err)=>res.json(err))
    }

      }
