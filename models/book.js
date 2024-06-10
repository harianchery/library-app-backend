const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "id":String,
        "author":String,
        "pubyear":String
    }
)

let bookmodel=mongoose.Model(books,schema);
module.exports=bookmodel