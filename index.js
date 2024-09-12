import express from "express"
import mongoose from 'mongoose';
import ProductRoute from "./routes/product.route.js"
import 'dotenv/config'

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))



//Routes
app.use("/api/products",ProductRoute)



app.get("/",(req,res)=>{
    res.send("<h1>Hello from Node API Server </h1>")
})

//connections
app.listen(process.env.PORT,()=>{
  console.log(`server is running at ${process.env.PORT}`)
})
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MONGO DB Connected!'))
  .catch((error)=>{
    console.log("Connection failed!!")
  });
