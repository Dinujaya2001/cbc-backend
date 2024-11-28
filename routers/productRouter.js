import express from 'express';
import product from '../models/product.js';
import { getProduct,createProduct,deleteProduct, getProductByName } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.get("/", getProduct);

productRouter.get("/:productname",getProductByName)

productRouter.post("/", createProduct);

productRouter.delete("/:productname",deleteProduct);

export default productRouter;