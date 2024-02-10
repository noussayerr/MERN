const express=require("express");
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.json(),express.urlencoded({extended:true}));

require('dotenv').config()

const port=process.env.port
require('./config/author.config')
require('./routes/author.routes')(app)
app.listen(port,()=>console.log(`listen on port ${port}`));

