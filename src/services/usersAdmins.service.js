const db = require('../database/models/index');
const AppError = require('../utils/appError');

class AdminsServices {
  async createAdmin(data) {
    try {
      const admin = await db.UsersAdmins.create(data);

      return admin;
    } catch (error) {
      throw Error(error);
    }
  }

  async findAllAdmins() {
    try {
      const admins = await db.UsersAdmins.findAll({
        where: {
          status: 'active',
        },
      });

      return admins;
    } catch (error) {
      throw Error(error);
    }
  }

  async findOneAdmin(adminId) {
    try {
      const admin = await db.UsersAdmins.findOne({
        where: {
          status: 'active',
          id: adminId,
        },
      });

      if(!admin) throw new AppError(`User id: ${adminId} not found`, 404);

      return admin;
      
    } catch (error) {
      throw Error(error);
    }
  }

  async updateAdmin(admin, adminData) {
    try {
      if(!admin) throw new AppError(`User not found`, 404);
      return await admin.update(adminData);
    } catch (error) {
      throw Error(error);
    }
  }

  async deleteUAdmin(adminId) {
    try {
      const admin = await this.findOneAdmin(adminId);

      return await admin.update({
        status: 'disable',
      });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = AdminsServices;
