const playerController=require('../controllers/player.controllers')

module.exports=app=>{
    app.get("/api/players",playerController.allPlayers)
    app.post("/api/players",playerController.createPlayer)
    app.put("/api/players/:id",playerController.updatePlayer)
    app.delete("/api/players/:id",playerController.deletePlayer)
}
    