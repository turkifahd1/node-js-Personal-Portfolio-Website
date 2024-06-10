const {PrismaClient}=require('@prisma/client')
const badRequestErrors=require('../errors/badRequests')
const { ErrorCode } = require('../errors/root')
const prisma = new PrismaClient()

class projectsServer{

  
  //send data 
async post(projectsData){
  try{
    const exitProjectName =await prisma.projects.findFirst({where:{  projectName : projectsData.projectName}})
    if(exitProjectName){
      throw new badRequestErrors("is found")
    }
    const postProjects=await prisma.projects.create({data:projectsData})
   
    return postProjects

  }catch(err){
     if(err instanceof badRequestErrors){
       throw err
     }
     throw err; // إعادة إلقاء الخطأ الأصلي
  }

}

//get all data
async get(){
  try{
    const exsit  = await prisma.projects.findMany();
    if(!exsit){
      throw new badRequestErrors(`Data not find`,ErrorCode.USER_NOT_FOUND)
    }
    return exsit
  }
  catch(err){
    if(err instanceof badRequestErrors){
      throw err
    }
    throw err; // إعادة إلقاء الخطأ الأصلي
 }
}

//get data by id 
async getID(id){
  try{
    const exsitId= await prisma.projects.findUnique({where:{id}});
  if(!exsitId){
    throw new badRequestErrors(`iD ${id} is not find`,ErrorCode.USER_NOT_FOUND);
  }
  return exsitId; //ضروري تسوي هنا return  عشان يرجع لعنصر بالid


  }catch(err){
    if(err instanceof badRequestErrors)
      {
        throw err
      }
  }
}

//delet data by id 
async delete(id){
  try{
    const exsitId= await prisma.projects.delete({where:{id}});
  if(!exsitId){
    throw new badRequestErrors(`iD ${id} is not find`,ErrorCode.USER_NOT_FOUND);
  }
  return exsitId; //ضروري تسوي هنا return  عشان يرجع لعنصر بالid


  }catch(err){
    if(err instanceof badRequestErrors)
      {
        throw err
      }
  }
}

//abdate data by id
async update(id ,data){

  const  exsitId = await prisma.projects.findUnique({ where: { id } });
  if (!exsitId) {
    throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
  }
  return await prisma.projects.update({
    where: { id },
    data
  });

}


}



module.exports=new projectsServer()