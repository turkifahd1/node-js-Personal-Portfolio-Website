// const NewServices=require('../services/News')
const { PrismaClient } = require("@prisma/client");
const badRequestsErrors = require("../errors/badRequests");
const NewServices = require("../services/News");
const ErrorCode = require("../errors/root");


class NewCtrollers {

  // post data
  async postAll(req, res, next) {
    try {
      const nwesDate = req.body;
      const nwePost = await NewServices.postAll(nwesDate);
      res.status(200).json(nwePost);
    } catch (error) {
      next(new badRequestsErrors(error));
    }

    
  }

  //get All data
  async getData(req, res, next) {
    try {
    
      const getData = await NewServices.getData();

      if (!getData) {
        throw new badRequestsErrors(`is not find data`);
      }

      res.status(200).json(getData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }



  //get Data By Id data
  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const getData = await NewServices.getById(id);

      if (!getData) {
        throw new badRequestsErrors(`is not find Id${id}`);
      }

      res.status(200).json(getData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }

  

  //delete
  async deleteData(req, res, next) {
    try {
      const id = req.params.id;
      const deleteData = await NewServices.deleteById(id);

      if (!deleteData) {
        throw new badRequestsErrors(`is not find Id${id}`);
      }

      res.status(200).json(deleteData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }


  //apdateById
  async updateById(req, res, next) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedPost = await NewServices.updateById(id, updateData);
      res.status(200).json(updatedPost);
    } catch (error) {
      next(new BadRequestErrors(error.message, ErrorCode.GENERIC_ERROR));
    }
  }
}

module.exports = new NewCtrollers();
