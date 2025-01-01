import product from "../models/product.js";
export function createProduct(req,res){
   if (!isAdmin(req)) {
        res.jeson({
            message:"Please login as administrator  to add products"
        })
        return
    }
    const newProductData = res.body

    const product = new product(newProductData)

    product.save().then(()=>{
        res.jeson({
            message:"Product is created"
        })
    }).catch((error)=>{
        res.jeson({
            message:"Product not created"
        })
    })
        
    
}