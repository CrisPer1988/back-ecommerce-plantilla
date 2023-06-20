const catchAsync = require('../utils/catchAsync');
const PurchasesServices = require("../services/purchase.service")
const UsersServices = require("../services/users.service")
const purchasesServices = new PurchasesServices()
const usersServices = new UsersServices()

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
    const { user_Id, product_Id,  quantity, totalPrice } = req.body
    // const { product }= req;
    // const totalPrice=(product.price)*quantity
    

    const purchase = await purchasesServices.createPurchase({
        user_Id, product_Id,  quantity, totalPrice
    })

    return res.status(201).json({
        status:"success",
        message: "create purchase succesfull",
        purchase
    })
})

exports.updatePurchase = catchAsync(async(req, res, next)=>{
    const {user_Id , product_Id, quantity } = req.body
    const { product }= req;
    const { purchase }= req;

    const totalPrice=(product.price)*quantity;
    const purchas=await purchasesServices.updatePurchase(purchase,{
        user_Id, product_Id, quantity,totalPrice
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