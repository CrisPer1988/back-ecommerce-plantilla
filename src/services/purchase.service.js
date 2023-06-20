const db = require("../database/models/index")

class PurchasesServices {
    async createPurchase(data) {
        try {
            const purchases = await db.Purchases.create(data)
            return purchases
        } catch (error) {
            throw Error(error)
        }
    }

    async findAllPurchases() {
        try {
            const purchases = await db.Purchases.findAll({
                where: {
                    status: "active"
                }
            })
            return purchases
        } catch (error) {
            throw Error(error)
        }
    }

    async findOnePurchase(purchaceId) {
        try {
            const purchase = await db.Purchases.findOne({
                where: {
                    status: "active",
                    id: purchaceId
                }
            })
            return purchase
        } catch (error) {
            throw Error(error)
        }
    }

    async updatePurchase(purchase, purchaseData) {
        try {
            return await purchase.update(purchaseData)
        } catch (error) {
            throw Error(error)
        }
    }

    async deletePurchase(purshaseId) {
       try {
        const purchase = await this.findOnePurchase(purshaseId)

        return await purchase.update({
            status: "disable"
        })
       } catch (error) {
        throw Error(error)
       }
    }
}

module.exports = PurchasesServices;