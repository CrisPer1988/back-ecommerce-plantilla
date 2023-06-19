const db = require('../database/models/index');
const { AppError, NotFoundError } = require('../utils/appError');

class ProductsServices {
  async createProducts(data) {
    try {
      const product = await db.products.create(data);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllProducts() {
    try {
      const products = await db.products.findAll();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneProduct(product_id) {
    try {
      const product = await db.Products.findByPk(product_id);
      if (!product)
        throw new NotFoundError(`Product id: ${product_id} not found`);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProducts(product, productData) {
    try {
      if (!product) throw new NotFoundError('Product not found');
      return await product.update(productData);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(product_id) {
    try {
      const product = await this.findOneProduct(product_id);
      return await product.update({
        status: 'desabled',
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ProductsServices;