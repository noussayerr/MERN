const productcontroller=require("../controllers/product.controllers")

module.exports=app=>{
    
    app.get("/api/products/:id",productcontroller.findOneproduct)
    app.patch("/api/products/:id",productcontroller.updateProduct)
    app.post("/api/products",productcontroller.createpoduct)
    app.delete("/api/products/:id",productcontroller.deleteOne)
    //app.delete("/api/products",productcontroller.deleteAll)

}