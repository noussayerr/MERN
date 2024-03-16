const mongoose=require("mongoose")
const mongodburl=process.env.mongodburl

mongoose.connect(mongodburl)

.then(()=>{console.log(`connected to db`)})
.catch((err)=>console.log(err))