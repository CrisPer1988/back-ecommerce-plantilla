const db = require("../database/models/index")

class UsersServices {
    async createUser(data) {
        try {
            const user = await db.Users.create(data)

            return user

        } catch (error) {
            throw Error(error)
        }
    }

    async findAllUsers() {
        try {
            const users = await db.Users.findAll({
                where: {
                    status: "active"
                }
            })

            return users
        } catch (error) {
            throw Error(error)
        }
    }

    async deleteUser(userId) {
       try {
        const user = await db.Users.findOne({
            where: {
                id: userId
            }
        })

        return await user.update({
            status: "disable"
        })
       } catch (error) {
        throw Error(error)
       }
    }
}

module.exports = UsersServices