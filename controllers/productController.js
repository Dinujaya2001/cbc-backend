import productModel from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req,res){

   if (!isAdmin(req)) {
        res.json({
            message:"Please login as administrator  to add products"
        })
        return
    }
    const newProductData = req.body

    const product = new productModel(newProductData)

    product.save().then(()=>{
        res.json({
            message:"Product is created"
        })
    }).catch((error)=>{
        res.json({
            message:error.message,
        })
    })
        
    
}
export function getProduct(req,res){
    productModel.find({}).then((products)=>{
        res.json(products)
    })
}