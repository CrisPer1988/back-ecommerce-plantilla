const db = require('../database/models/index');
const AppError = require('../utils/appError');

class CategoryServices {
  async createCategory(data) {
    try {
      const category = await db.Category.create(data);
      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllCategory() {
    try {
      const categories = await db.Category.findAll({
        where: {
          status: 'active',
        },
        include:[
          {
            model:db.product_category,
            include:[
              db.Products
            ]
          }
        ]
      });
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneCategory(categoryId) {
    try {
      const category = await db.Category.findOne({
        where: {
          status: 'active',
          id: categoryId,
        },
        include:[
          {
            model:db.product_category,
            include:[
              db.Products
            ]
          }
        ]
      });

      if (!categoryId)
        throw new AppError(
          `product_category Id: ${categoryId} not found`,
          404
        );

      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateCategory(category, categoryData) {
    try {
      if (!category) throw new AppError('category not found');
      return await category.update(categoryData);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteCategory(categoryId) {
    try {
      const category = await this.findOneCategory(
        categoryId
      );
      return await category.update({
        status: 'disable',
      });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = CategoryServices;