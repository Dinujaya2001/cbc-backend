import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import jwt, { decode } from "jsonwebtoken";

const app = express();
const mongoUrl = "mongodb+srv://Tharaka:12345@cluster0.th01k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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
       console.log(token)

       if (token != null) {
        jwt.verify(token,"cbc-secreat-key-20010306",(error,
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

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

app.listen(
    5000,
    () => {

        console.log('sever is started');

    }
)