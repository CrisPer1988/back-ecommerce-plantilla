const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError')

const PurchasesServices = require("../services/purchase.service")
const UsersServices = require("../services/users.service")
const purchasesServices = new PurchasesServices()
const usersServices = new UsersServices()

exports.validExistPurchase =  catchAsync(async(req, res, next) => {
    const { product_Id } = req.body
    const purchase = await purchasesServices.findOnePurchase(product_Id)
    if (!purchase) {
        return next(new AppError('product_Id not found',404))
    }
    req.purchase=purchase;
    next()
})

exports.validExistUser = catchAsync(async(req, res, next)=>{
    const { user_Id } = req.body
    const user = await usersServices.findOneUser(user_Id);
    if (!user) {
        return next(new AppError('user_id not found',404))
    }
})

