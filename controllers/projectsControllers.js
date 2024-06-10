
const badRequestErrors=require("../errors/badRequests")
const errorCode=require("../errors/root")
const projectsServer=require("../services/projects")


class projectsControllers{

  //post data 

  async post(req,res,next){
    try{
      const projectsData =req.body;
      const projectsPost=await projectsServer.post(projectsData) ; //postAll هاذي ماهي حق الصفحة ذي الي هنا بل انها حق الي في صفحة server تتشابه الاسامي لاتلخبلط
      res.status(200).json(projectsPost)
    }catch(error){
      next(new badRequestErrors(error))

    }
  }

  //get all data
  async get(req,res,next){
    try{
      const getDataa=await projectsServer.get();
      if(!getDataa){
        throw new badRequestErrors("is not find data")
      }
      res.status(200).json(getDataa)
    }
    catch(error){
      next(new badRequestErrors(error));
    }
  }

 // get data by id
 async getID(req,res,next){
   
  try{
    const id = req.params.id;
    const getData=await projectsServer.getID(id);
    
    if(!getData){
      throw new badRequestErrors(`not find by id ${id}`)
    }
    res.status(200).json(getData)
  }
  catch(err){
    next(new badRequestErrors(err))
  }

 }
 
 // delet data by id
 async delete(req,res,next){
   
  try{
    const id = req.params.id;
    const getData=await projectsServer.delete(id);
    
    if(!getData){
      throw new badRequestErrors(`not find by id ${id}`)
    }
    res.status(200).json(getData)
  }
  catch(err){
    next(new badRequestErrors(err))
  }

 }

 //apdateById
 async update(req, res, next) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedPost = await projectsServer.update(id, updateData);
    res.status(200).json(updatedPost);
  } catch (error) {
    next(new BadRequestErrors(error.message, ErrorCode.GENERIC_ERROR));
  }
}
}

module.exports=new projectsControllers()