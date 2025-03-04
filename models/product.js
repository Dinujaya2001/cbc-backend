import mongoose from "mongoose";
 const productSchema = mongoose.Schema({
    productID : {
        type : String,
        required : true,
        unique : true
    },
    productName :{
        type : String,
        required:true
        
    },
    altName :[
        {
        type : String
        }
    ], 
    images :[
        {
            type:String
        }
    ] ,
    price :{
        type : Number,
        required:true
        
    },
    lastPrice :{
        type : Number,
        required:true
        
    },
    stock :{
        type : Number,
        required:true
        
    },
    Description :{
        type : String,
        required:true
        
    },

 })
 const product = mongoose.model("products",productSchema);
 export default product;