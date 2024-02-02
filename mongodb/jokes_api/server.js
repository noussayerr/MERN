const express=require("express")
const app=express()

//mdl ware

app.use(express.json(), express.urlencoded({ extended: true }))

require("dotenv").config()
require("./config/jokes.config")

const port = process.env.PORT

require("./routes/joke.routes")(app)

app.listen(port,()=>console.log(`listen on port = ${port}`))