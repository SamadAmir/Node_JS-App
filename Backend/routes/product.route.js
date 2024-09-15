import express from "express"
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"

const routes = express.Router()

routes.get("/", getProducts)
routes.get("/:id", getProduct)

routes.post("/", createProduct)

routes.put("/:id", updateProduct)

routes.delete("/:id", deleteProduct)


export default routes