const db = require('../database/models/index');
const { AppError, NotFoundError } = require('../utils/appError');
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../utils/firebase");

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
    try {
    const products = await db.Products.findAll({
      where: {
        status: 'active',
      },
      include:[
        {
            model:db.Purchases
        },
        {
            model:db.Product_img
        }
    ],
    });
    const resolveAllImg=products.map(async(product)=>{
      const resolvImgs=product.Product_imgs.map(async(img)=>{
        const url3 = await getDownloadURL(ref(storage, img.product_imgUrl));
        img.product_imgUrl=url3;
        return img;
      })
      await Promise.all(resolvImgs)
      product.Product_imgs=resolvImgs
      return product;
    })
    
    await Promise.all(resolveAllImg);
    return products;
  }   catch (error) {
      throw new Error(error);
    }

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
      const product= await db.Products.findOne({
        where:{
          id:product_id
        },
        include:[
          {
              model:db.Purchases
          },
          {
              model:db.Product_img
          }
      ],
      });
      if (!product) throw new NotFoundError(`Product id: ${product_id} not found`);


      const resolveImg=product.Product_imgs.map( async(img)=>{
        const url3 = await getDownloadURL(ref(storage, img.product_imgUrl));
        img.product_imgUrl=url3;
        return img;
      })
      await Promise.all(resolveImg)
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
