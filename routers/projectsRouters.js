const express=require('express')
const Routerr=express.Router();
const projectsControllers =require("../controllers/projectsControllers")
const projectsValidator = require('../validator/newsValidator')

//post data to  mongo
Routerr.post("/",projectsValidator.userValidationRules(),projectsValidator.validate,projectsControllers.post)
//Get all data to mongo
Routerr.get("/",projectsControllers.get)

//Get data by id 
Routerr.get("/:id",projectsControllers.getID)

//delete data by id 
Routerr.delete("/:id",projectsControllers.delete)

//abdate data by id 
Routerr.put("/:id",projectsValidator.userValidationRules(),projectsValidator.validate ,projectsControllers.update)
module.exports= Routerr;