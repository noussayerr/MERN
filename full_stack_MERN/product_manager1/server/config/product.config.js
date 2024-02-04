const mongoose=require("mongoose")

const db=process.env.DB

mongoose.connect(`mongodb://127.0.0.1/${db}`)
.then(()=>console.log(`connected to ${db} DB`))
.catch((err)=>console.log(err))