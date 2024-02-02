const mongoose=require("mongoose");
const jokes=process.env.DB

mongoose.connect(`mongodb://127.0.0.1/${jokes}`)
.then(()=>console.log(`connected to db ${jokes}`))
.catch(err=>console.log(err))