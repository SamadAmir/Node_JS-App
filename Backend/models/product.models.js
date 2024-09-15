import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,  
      required: [true, "Product name is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the Quantity"],
      default: 0,
    },
    price: {  
      type: Number,
      required: [true, "Please enter the Price"],
      default: 0,
    },
    image: {
      type: String,  
      required: false,
    },
  },
  { timestamps: true }
);


const Product = mongoose.model("Product", ProductSchema);
export default Product;
