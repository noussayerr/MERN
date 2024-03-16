const multercontroller=require('../controllers/multer.controllers')
const multer = require('multer')
const fs = require('fs')
const express=require("express")
const upload = multer({ dest: 'images/' })

module.exports=app=>{
    app.get("/api/multer",multercontroller.findall)
    app.post("/api/multer", upload.single('image'),multercontroller.create)
    app.use('/images', express.static('images'))
    app.get('/images/:imageName', (req, res) => {
        const imageName = req.params.imageName
        const readStream = fs.createReadStream(`images/${imageName}`)
        readStream.pipe(res)
      })
}