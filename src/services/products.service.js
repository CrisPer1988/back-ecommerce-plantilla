const db = require('../database/models/index');
const { AppError, NotFoundError } = require('../utils/appError');

class ProductsServices {
  async createProducts(data) {
    try {
      const product = await db.Products.create(data);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllProducts() {
    const products = await db.Products.findAll({
      where: {
        status: 'active',
      },
    });

    return products;
    // try {
    //   const products = await db.products.findAll({
    //     where: {
    //       status: 'active',
    //     },
    //   });
    //   return products;
    // } catch (error) {
    //   throw new Error(error);
    // }
  }

  async findOneProduct(product_id) {
    try {
      const product = await db.Products.findOne({
        where:{
          id:product_id
        }
      });
      if (!product) throw new NotFoundError(`Product id: ${product_id} not found`);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProducts(product, productData) {
    try {
      if (product) throw new NotFoundError('Product not found');
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
