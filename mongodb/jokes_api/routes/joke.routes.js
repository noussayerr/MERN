const jokecontroller=require("../controllers/joke.controller")

module.exports=app=>{
    app.get("/app/jokes",jokecontroller.findalljokes)
    app.post("/app/jokes",jokecontroller.createNewjoke)
}