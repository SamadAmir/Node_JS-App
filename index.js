import express from "express"
import mongoose from 'mongoose';
import Product from "./models/product.models.js"
import 'dotenv/config'

const app = express()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log("Server is running at 3000")
})

//Importing routes
//To add the Product
app.post('/api/products',async (req,res)=>{
  try {
   const product =  await Product.create(req.body)
   res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message:error.message})
    
  }
}) 

//To Find the product
app.get("/api/products",async (req,res)=>{
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

//To find by ID
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update the Product
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete the Product
app.delete("/api/product/:id",async(req,res)=>{
  try {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    if(!product){
      res.status(404).json({message:"Product is not found"})
    }
    res.status(200).json({message:"Product is deleted successfully!"})
  } catch (error) {
    res.status(500).json({message:error.message})
  }

})

app.get("/",(req,res)=>{
    res.send("<h1>Hello from Node API Server </h1>")
})

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MONGO DB Connected!'))
  .catch((error)=>{
    console.log("Connection failed!!")
  });
