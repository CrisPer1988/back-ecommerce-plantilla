const db = require('../database/models/index');
const AppError = require('../utils/appError');

class Products_categoryServices {
  async createProduct_category(data) {
    try {
      const product_category = await db.product_category.create(data);
      return product_category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllProduct_category() {
    try {
      const products_categories = await db.product_category.findAll({
        where: {
          status: 'active',
        },
      });
      return products_categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneProduct_category(product_categoryId) {
    try {
      const product_category = await db.product_category.findOne({
        where: {
          status: 'active',
          id: product_categoryId,
        },
      });

      if (!product_categoryId)
        throw new AppError(
          `product_category Id: ${product_categoryId} not found`,
          404
        );

      return product_category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct_category(product_category, product_categoryData) {
    try {
      if (!product_category) throw new AppError('Product_category not found');
      return await product_category.update(product_categoryData);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct_category(product_categoryId) {
    try {
      const product_category = await this.findOneProduct_category(
        product_categoryId
      );
      return await product_category.update({
        status: 'disable',
      });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = Products_categoryServices;
