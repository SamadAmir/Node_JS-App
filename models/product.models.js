import mongoose from "mongoose";

const ProductScehma = new mongoose.Schema
    (
        {
            name: {
                type: "String",
                required: [true, "Product name is required"]
            },

            quantity: {
                type: Number,
                required: [true, "Please enter the Quantity"],
                default: 0
            },

            Price: {
                type: Number,
                required: [true, "Please enter the Price"],
                default: 0
            },

            image: {
                type: "String",
                required: false
            }
        },
        { timestamps: true }

    )


export const User = mongoose.model("Product", ProductScehma)

module.exports=Product;