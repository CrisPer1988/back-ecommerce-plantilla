const db = require('../database/models/index');
const AppError = require('../utils/appError');

class BusinessService {
  async createBusiness(data) {
    try {
      const business = await db.Business.create(data);

      return business;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllBusinesses() {
    try {
      const businesses = await db.Business.findAll();

      return businesses;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneBusiness(businessId) {
    try {
      const business = await db.Business.findByPk(businessId);

      if (!business)
        throw new AppError(`Business id: ${businessId} not found`, 404);

      return business;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateBusiness(business, businessData) {
    try {
      if (!business) throw new AppError(`Business not found`, 404);
      return await business.update(businessData);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteBusiness(businessId) {
    try {
      const business = await this.findOneBusiness(businessId);

      return await business.update({
        status: 'disabled',
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BusinessService;
