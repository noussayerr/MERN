const productcontroller=require("../controllers/product.controllers")

module.exports=app=>{
    app.get("/api/products",productcontroller.findAllproduct)
    app.get("/api/products/:id",productcontroller.findOneproduct)
    app.post("/api/products",productcontroller.createpoduct)
}