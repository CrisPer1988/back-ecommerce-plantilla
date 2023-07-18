const db = require('../database/models/index');
const AppError = require('../utils/appError');

class BusinesService {
  async createBusines(data) {
    try {
      const busines = await db.Busines.create(data);

      return busines;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllBusines() {
    try {
      const busines = await db.Busines.findAll();

      return busines;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneBusines(businessId) {
    try {
      const busines = await db.Busines.findByPk(businessId);

      if (!busines)
        throw new AppError(`Busines id: ${businessId} not found`, 404);

      return busines;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateBusines(busines, businesData) {
    try {
      if (!busines) throw new AppError(`Busines not found`, 404);
      return await busines.update(businesData);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteBusines(businessId) {
    try {
      const busines = await this.findOneBusines(businessId);

      return await busines.update({
        status: 'disabled',
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = BusinesService;
