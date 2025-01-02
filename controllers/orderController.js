import orderModel from "../models/order.js";
import { isCustomer} from "./userController.js";

export async function createOrder(req,res){

    if (isCustomer(req)) {
        res.json({
            message:"Please login as customer to create order"
        })
    }

    try {
        const latestOrder = await orderModel.find().sort({date : -1}).limit(1);

        let orderID
        if (latestOrder.leangth ==0) {
            orderID = "CBC001"
            
        }else{
            const curruntOrderId = latestOrder[0].orderID

            const numberString = curruntOrderId.replace("CBC","")

            const number = parseInt(numberString)

            const newNumber = (number + 1).toString().padStart(4, "0");

            orderID = "CBC" + newNumber

            
        }
        const newOrderDate = req.body
        newOrderDate.orderID = orderID
        newOrderDate.email = req.user.email

        const order = new orderModel(newOrderDate)
        await order.save();
        res.json({
            message:"Order created"
        })
    } catch (error) {
        res.status(500).json({
            messa:error.message
        })
    }
    
}