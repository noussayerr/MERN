const jokecontroller=require("../controllers/joke.controller")

module.exports=app=>{
    app.get("/app/jokes",jokecontroller.findalljokes)
    app.get("/app/jokes/:id",jokecontroller.findonejokes)
    app.patch("/app/jokes/:id",jokecontroller.updatejoke)
    app.post("/app/jokes",jokecontroller.createNewjoke)
    app.delete("/app/jokes/:id",jokecontroller.deletejoke)   
}