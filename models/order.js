import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderID : {
        type :String,
        required : true,
        unique : true
    },
    email : {
        type :String,
        required : true
    },
    orderItems :[
        {
            name:{
                type : String,
                required : true
            },
            price:{
                type : Number,
                required : true
            },
            quantity:{
                type : Number,
                required : true
            },
            image:{
                type : String,
                required : true
            }
        }
    ],
    Date : {
        type  : Date ,
        default : Date.now  
     },
     paymentID :{
        type : String ,
        
    },
    status:{
        type: String,
        default:"pending"
    },
    notes :{
        type : String ,
        
    },
    name:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },

})
const orderModel = mongoose.model("order",orderSchema);