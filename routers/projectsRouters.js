const express=require('express')
const routerr=express.Router();
const projectsControllers =require("../controllers/projectsControllers")
const projectsValidator = require('../validator/newsValidator')

//post data to  mongo
routerr.post("/",projectsValidator.userValidationRules(),projectsValidator.validate,projectsControllers.post)
//Get all data to mongo
routerr.get("/",projectsControllers.get)

//Get data by id 
routerr.get("/:id",projectsControllers.getID)

//delete data by id 
routerr.delete("/:id",projectsControllers.delete)

//abdate data by id 
routerr.put("/:id",projectsValidator.userValidationRules(),projectsValidator.validate ,projectsControllers.update)
module.exports= routerr;