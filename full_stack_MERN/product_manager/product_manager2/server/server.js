const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
//middl ware 

app.use(express.json(),express.urlencoded({extended:true}))

require("dotenv").config()
require("./config/product.config")

require("./routes/product.routes")(app)

const port=process.env.port

app.listen(port,()=>console.log(`listen on port ${port}`))