import express from "express"
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log("Server is running at 3000")
})

//Importing routes

app.post('/api/products',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello from Node API Server </h1>")
})

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MONGO DB Connected!'))
  .catch((error)=>{
    console.log("Connection failed!!")
  });
