const mongoose=require('mongoose')

const db=process.env.db

mongoose.connect(`mongodb://127.0.0.1/${db}`)
.then(()=>console.log(`connected to ${db} db`))
.catch(err=>console.log(err))