const db = require('../database/models/index');
const AppError = require('../utils/appError');
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../utils/firebase");

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
      const busines = await db.Busines.findAll({
        where:{
          status:'active'
        },
        include:[
          {
            model:db.Busines_img,
          },
          {
            model:db.Products,
          },
          {
            model:db.Users,
          },
          {
            model:db.UsersAdmins
          },
        ]
      });
      
      const resolveAllImg=busines.map(async(bus)=>{
        const resolvImgs=bus.Busines_imgs.map(async(img)=>{
          const url3 = await getDownloadURL(ref(storage, img.busines_imgUrl));
          img.busines_imgUrl=url3;
          return img;
        })
        await Promise.all(resolvImgs);
        bus.Product_imgs=resolvImgs;
        return bus;
      })
      
      await Promise.all(resolveAllImg);
      

      return busines;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOneBusines(businessId) {
    try {
      const busines = await db.Busines.findOne({
        where:{
          id:businessId
        },
        include:[
          {
            model:db.Busines_img,
          },
          {
            model:db.Products,
          },
          {
            model:db.Users,
          },
          {
            model:db.UsersAdmins
          },
        ]

      });

      if (!busines)
        throw new AppError(`Busines id: ${businessId} not found`, 404);
        const resolveImg=busines.Busines_imgs.map( async(img)=>{
          const url3 = await getDownloadURL(ref(storage, img.busines_imgUrl));
          img.busines_imgUrl=url3;
          return img;
        })
        await Promise.all(resolveImg)
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
