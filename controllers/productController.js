import product from "../models/product.js";


export function getProduct(req, res) {
    product.find().then(
      (productList) => {
        res.json({
          List: productList
        })
      }
    )
  }

  export function createProduct(req, res)  {
    console.log(req.user)

    if (req.user == null) {
      res.json({
        message:"You are not logged in."
      })
      return
    }
    if (req.user.type != "admin") {
      res.json({
        message:"You are not Admin."
      })
      return
    }
    const Product = new product(req.body)
    Product.save().then(() => {
        res.json({
          message: "product created"
        })
      }
    )
  }

  export function deleteProduct(req,res){
    product.deleteOne({name:req.params.name}).then(()=>{
        res.json({
            message:"product Deleted"
        })
    })
  }

   export function getProductByName(req,res){
    const name = req.params.productname;
    product.find({productname:name}).then(
      (productList)=>{
        if(productList.length == 0){
          res.json({
            message:"Product not found"
          })
        }else{
          res.json({
            List:productList
          })
        }
      }
    )
   }
