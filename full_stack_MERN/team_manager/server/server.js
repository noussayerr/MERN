const express=require("express");
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.json(),express.urlencoded({extended:true}));

require('dotenv').config()

const port=process.env.port
require('./config/team.config')
require('./routes/player.routes')(app)
app.listen(port,()=>console.log(`listen on port ${port}`));

