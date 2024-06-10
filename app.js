const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const book=require("./models/book")

const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("hi")
})

app.post("/search",(req,res)=>{
    res.send("hello")
})

app.post("/delete",(req,res)=>{
    res.send("hiiii")
})

app.get("/view",(req,res)=>{
    res.send("helooo")
})

app.listen(8080,()=>{
    console.log("server starts")
})