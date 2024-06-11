const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":{type:String,required:true},
        "id":{type:String,required:true},
        "author":{type:String,required:true},
        "pubyear":{type:String,required:true}
    }
)

let bookmodel=mongoose.model("books",schema);
module.exports={bookmodel}