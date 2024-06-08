
const badRequestErrors=require("../errors/badRequests")
const errorCode=require("../errors/root")
const projectsServer=require("../services/Projects")


class projectsControllers{

  //post data 

  async postAll(req,res,next){
    try{
      const projectsData =req.body;
      const projectsPost=await projectsServer.postAll(projectsData) ; //postAll هاذي ماهي حق الصفحة ذي الي هنا بل انها حق الي في صفحة server تتشابه الاسامي لاتلخبلط
      res.status(200).json(projectsPost)
    }catch(error){
      next(new badRequestErrors(error))

    }
  }

  //get all data
  async getData(req,res,next){
    try{
      const getDataa=await projectsServer.getData();
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
 async getById(req,res,next){
   
  try{
    const id = req.params.id;
    const getData=await projectsServer.getById(id);
    
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
 async deleteById(req,res,next){
   
  try{
    const id = req.params.id;
    const getData=await projectsServer.deleteById(id);
    
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
 async updateById(req, res, next) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedPost = await projectsServer.abdateById(id, updateData);
    res.status(200).json(updatedPost);
  } catch (error) {
    next(new BadRequestErrors(error.message, ErrorCode.GENERIC_ERROR));
  }
}
}

module.exports=new projectsControllers()