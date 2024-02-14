const playerController=require('../controllers/player.controllers')

module.exports=app=>{
    app.get("/api/players",playerController.allPlayers)
    app.post("/api/players",playerController.createPlayer)
    app.delete("/api/players/:id",playerController.deletePlayer)
}