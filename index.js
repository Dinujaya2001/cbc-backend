import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
dotenv.config()

const app = express();
const mongoUrl = process.env.MONGO_DB_URI

mongoose.connect(mongoUrl, {})

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database Connected");
})

app.use(bodyParser.json())

app.use(
    (req,res,next) => {
       
       const token = req.header("Authorization")?.replace
       ("Bearer ","")
       //console.log(token)

       if (token != null) {
        jwt.verify(token,process.env.SEACRAT,(error,
            decoded)=>{
                if(!error){
                    
                    req.user = decoded
                    
                }

            }
        )
       }

      next()
       
    }
)

app.use("/api/users", userRouter)
app.use("/api/products",productRouter)
app.use("/api/orders",orderRouter)

app.listen(
    5000,
    () => {

        console.log('sever is started');

    }
)