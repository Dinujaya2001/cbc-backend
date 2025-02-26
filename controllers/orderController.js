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

        const newProductArray = []

        for (let i = 0; i < newOrderDate.orderedItems.length; i++) {
            const product = await product.findOne({
              productId: newOrderDate.orderedItems[i].productId,
            });
      
            if (product == null) {
              res.json({
                message:
                  "Product with id " +
                  newOrderDate.orderedItems[i].productId +
                  " not found",
              });
              return;
            }
      
            newProductArray[i] = {
              name: product.productName,
              price: product.lastPrice,
              quantity: newOrderDate.orderedItems[i].qty,
              image: product.images[0],
            };
          }
          console.log(newProductArray);
      
          newOrderDate.orderedItems = newProductArray;
      
          newOrderDate.orderId = orderId;
          newOrderDate.email = req.user.email;
      
          const order = new Order(newOrderDate);
      
          const savedOrder = await order.save();
      
          res.json({
            message: "Order created",
            order : savedOrder
          });



    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
   
    
}
export async function getOrder(req,res){
    try {
        const orders = await Order.find({email:req.user.email});
        res.json(orders)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
