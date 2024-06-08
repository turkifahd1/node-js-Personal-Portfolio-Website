const express=require('express')
const Routerr=express.Router();
const projectsControllers =require("../controllers/projectsControllers")
const projectsValidator = require('../validator/newsValidator')

//post data to  mongo
Routerr.post("/",projectsValidator.userValidationRules(),projectsValidator.validate,projectsControllers.postAll)
//Get all data to mongo
Routerr.get("/",projectsControllers.getData)

//Get data by id 
Routerr.get("/:id",projectsControllers.getById)

//delete data by id 
Routerr.delete("/:id",projectsControllers.deleteById)

//abdate data by id 
Routerr.put("/:id",projectsValidator.userValidationRules(),projectsValidator.validate ,projectsControllers.updateById)
module.exports= Routerr;