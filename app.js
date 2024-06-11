const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const book=require("./models/book")
const {bookmodel} = require("./models/book")

const app=express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://hari:hari001@cluster0.ocavfn3.mongodb.net/librarydb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // console.log(input)
    let book=new bookmodel(input)
    book.save()
    // console.log(book)
    
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    bookmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})



app.listen(8081,()=>{
    console.log("server started")


})

