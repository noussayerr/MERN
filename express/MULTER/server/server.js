const express = require("express")
const app = express()
const cors=require("cors")
app.use(cors())
app.use(express.json(),express.urlencoded({extended:true}));


require('dotenv').config()
const port=process.env.port
app.use('/images', express.static('images/'))
require("./config/server.config")
require('./routes/multer.routes')(app)
app.listen(port ,()=> console.log (`listen on port ${port}`))