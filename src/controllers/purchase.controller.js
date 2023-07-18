const catchAsync = require('../utils/catchAsync');
const PurchasesServices = require("../services/purchase.service")
const UsersServices = require("../services/users.service")
const ProductServices= require("../services/products.service")
const purchasesServices = new PurchasesServices()
const usersServices = new UsersServices()
const productServices = new ProductServices()


exports.findAllPurchases = catchAsync(async(req, res, next) => {
    const purchases = await purchasesServices.findAllPurchases()
    return res.status(200).json({
        status: "success",
        results: purchases.length,
        purchases
    })
});

exports.findOnePurchases= catchAsync(async(req, res, next) => {
    const { id } = req.params
    const purchase = await purchasesServices.findOnePurchase(id)
    return res.status(200).json({
        status: "success",
        purchase,
    })
})

exports.createPurchase= catchAsync(async(req, res, next)=>{
    const { user_id, product_id,  quantity, } = req.body

    const product=await productServices.findOneProduct(product_id)
    await usersServices.findOneUser(user_id)
    const totalPrice=(product.price)*quantity;
    

    const purchase = await purchasesServices.createPurchase({
        user_id, product_id,  quantity, totalPrice
    })

    return res.status(201).json({
        status:"success",
        message: "create purchase succesfull",
        purchase
    })
})

exports.updatePurchase = catchAsync(async(req, res, next)=>{
    const { user_id, product_id,  quantity, } = req.body;
    const { id } = req.params;

    const product=await productServices.findOneProduct(product_id)
    await usersServices.findOneUser(user_id)
    const totalPrice=(product.price)*quantity;

    const purchase= await purchasesServices.findOnePurchase(id)

    const purchas=await purchasesServices.updatePurchase(purchase,{
        user_id, product_id, quantity,totalPrice
    })

    return res.status(201).json({
        status:"success",
        message:"update purchase",
        purchase: purchas
    })
})

exports.deletePurchase= catchAsync(async(req, res, next)=>{
    const { id }= req.params
    await purchasesServices.deletePurchase(id);
    return res.status(201).json({
        status:"success",
        message:"delete purchase succesfull"
    })
})