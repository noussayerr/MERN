const productcontroller=require("../controllers/product.controllers")

module.exports=app=>{
    app.get("/api/products",productcontroller.findAllproduct)
    app.post("/api/products",productcontroller.createpoduct)
}