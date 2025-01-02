import Order from "../models/order.js";
import { isCustomer} from "./userController.js";

export async function createOrder(req,res){

 
    if (!isCustomer(req)) {
        return res.json({
            message: "Please login as customer to create order",
        });
    }
    

    try {
        const latestOrder = await Order.find().sort({ Date: -1 }).limit(1);

        

        let orderId;

        if (latestOrder.length == 0) {

            orderId = "CBC0001";
            
        }else{
            const curruntOrderId = latestOrder[0].orderId

            const numberString = curruntOrderId.replace("CBC","")

            const number = parseInt(numberString)

            const newNumber = (number + 1).toString().padStart(4, "0");

            orderId = "CBC" + newNumber

            
        }
        const newOrderDate = req.body;
        newOrderDate.orderId = orderId;
        newOrderDate.email = req.user.email;

       
        const order = new Order(newOrderDate);
        await order.save();
        res.json({
            message:"Order created"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
    
}
