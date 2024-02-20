const thingController=require('../controllers/thing.controller')

module.exports=app=>{
    app.get("/api/thing",thingController.allthings)
    app.get("/api/thing/:id",thingController.findOnething)
    app.post("/api/thing",thingController.creatething)
    app.put("/api/thing/:id",thingController.updatething)
    app.delete("/api/thing/:id",thingController.deletething)
    
}