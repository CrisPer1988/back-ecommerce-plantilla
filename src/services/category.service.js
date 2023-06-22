const db = require("../database/models/index")
const AppError = require("../utils/appError")

class CategoryServices {

    async createCategory(data) {
        try {
            const category = await db.Category.create(data)

            return category
        } catch (error) {
            throw Error(error)
        }
    }

    async findAllCategories() {
        try {
            const categories = await db.Category.findAll({
                where: {status: "active"}
            })

            return categories
        } catch (error) {
            throw Error(error)
        }
    }

    async findOneCategory(categoryId) {
        try {
            const category = await db.Category.findByPk(categoryId)

        if(!category) 
        throw new AppError(`Business id: ${categoryId} not found`, 404);

        return category
        } catch (error) {
            throw Error(error)
        }
    }

    async updateCategory(category, data) {
        try {
           if(!category) throw new AppError(`Category not found`, 404);
           return await category.update(data);

        } catch (error) {
            throw Error(error)
            
        }
    }

    async deleteCategory(category) {
        try {
            if(!category) throw new AppError(`Category not found`, 404);

            return category.update({status: "disable"})
        } catch (error) {
            
        }
    }

}

module.exports = CategoryServices