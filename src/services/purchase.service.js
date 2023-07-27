const db = require("../database/models/index")
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../utils/firebase");

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
                },
                include:[
                    {
                        model:db.Products,
                        include:[
                            {
                                model:db.Product_img
                            }
                        ]
                    },
                    {
                        model:db.Users
                    }
                ],
            })


            const resolveAllImg=purchases.map(async(purchase)=>{
                const resolvImgs=purchase.Product.Product_imgs.map(async(img)=>{
                  const url = await getDownloadURL(ref(storage, img.product_imgUrl));
                  img.product_imgUrl=url;
                  return img;
                })
                await Promise.all(resolvImgs);
                purchase.Product.Product_imgs=resolvImgs;
                return purchase;
              })
            
            await Promise.all(resolveAllImg);
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
                },
                include:[
                    {
                        model:db.Products,
                        include:[
                            {
                                model:db.Product_img
                            }
                        ]
                    },
                    {
                        model:db.Users
                    }
                ]
            })

            const resolveImg=purchase.Product.Product_imgs.map( async(img)=>{
                const url3 = await getDownloadURL(ref(storage, img.product_imgUrl));
                img.product_imgUrl=url3;
                return img;
              })
              await Promise.all(resolveImg);
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