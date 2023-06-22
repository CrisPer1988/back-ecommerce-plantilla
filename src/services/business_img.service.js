const db = require("../database/models/index")
const AppError = require("../utils/appError")

class Business_imgServices {
    
    async createBusiness_img(data) {
        try {
            const business_img = await db.Business_img.create(data)

        return business_img
        } catch (error) {
            throw Error(error)
        }
    }

    async deleteBusiness_img(business_imgId) {
        try {
            const business_img = await db.Business_img.findByPk(business_imgId)

            if(!business_img)
            throw new AppError(`Business id: ${business_imgId} not found`, 404);

            return business_img.update({
                status: "disable"
            })
            
        } catch (error) {
            throw Error(error)
        }
    }
}

module.exports = Business_imgServices