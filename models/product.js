import mongoose from "mongoose"


const productModel = mongoose.Schema({
    productname: String,
    price:Number,
    quantity:Number

})
const product = mongoose.model("product",productModel)

export default product