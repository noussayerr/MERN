const authorController=require('../controllers/author.controllers')

module.exports=app=>{
    app.get("/api/authors",authorController.allAuthors)
    app.get("/api/authors/:id",authorController.oneAuthor)
    app.post("/api/authors",authorController.createAuthor)
    app.patch("/api/authors/:id",authorController.updateAuthor)
    app.delete("/api/authors/:id",authorController.deleteAuthor)
}