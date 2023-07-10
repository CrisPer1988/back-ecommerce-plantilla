const db = require('../database/models/index');
const AppError = require('../utils/appError');

class UsersServices {
  async createUser(data) {
    try {
      const user = await db.Users.create(data);

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  async findAllUsers() {
    try {
      const users = await db.Users.findAll({
        where: {
          status: 'active',
        },
      });

      return users;
    } catch (error) {
      throw Error(error);
    }
  }

  async findOneUser(userId) {
    try {
      const user = await db.Users.findOne({
        where: {
          status: 'active',
          id: userId,
        },
      });

      return user;
    } catch (error) {
      throw Error(error);
    }
  }

  async updateUser(user, userData) {
    try {
      return await user.update(userData);
    } catch (error) {
      throw Error(error);
    }
  }

  async deleteUser(userId) {
    try {
      const user = await this.findOneUser(userId);

      if (!user) throw new AppError('The user was not found', 404);

      return await user.update({
        status: 'disable',
      });
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = UsersServices;
