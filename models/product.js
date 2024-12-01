import mongoose from "mongoose"


const productModel = mongoose.Schema({
    productname: String,
    Description:String,
    MFD_Date:Date,
    EXP_Date:Date,
    price:Number,
    quantity:Number,

})
const product = mongoose.model("product",productModel)

export default product