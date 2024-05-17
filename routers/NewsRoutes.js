const express=require('express')
const Routerr= express.Router();
const NewControllers= require("../controllers/NewsControllers")
const newsValidator = require('../validator/newsValidator');

// post data to mongo
Routerr.post("/" ,newsValidator.userValidationRules(),newsValidator.validate,NewControllers.postAll);


// get data from mongo
Routerr.get("/",NewControllers.getData);

// get one data from mongo
Routerr.get("/:id",NewControllers.getById);

//abdate data
Routerr.put("/:id",newsValidator.userValidationRules(), newsValidator.validate ,NewControllers.updateById);

//delete
Routerr.delete("/:id",NewControllers.deleteData);




module.exports=Routerr;