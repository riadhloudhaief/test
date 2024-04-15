//require your model product here
const product=require('../Mysql/index')
const{op}=require('sequelize')
module.exports.getAll =async (req, res) => {
  try{
    const products=await product.findAll();
res.status(200).jason(products)
  }catch (error){
    console.error("error fetching prudact",error);
        res.status(200).send(allProduct);
  }
                 };
module.exports. createProduct=async (req,res)=>{
  try{
    const prudact = await prudact.create(req.body);
    res.status(201).send(prudact);
  }catch (error){
    throw error;
  }
}
module.exports.getOneByCtegory=async (req,res)=>{
  try{
    const prudact = await prudact.findAll({
      where:{categories:req.params.category},
    });
    res.status(201).send(prudact);
  }catch (error){
    throw error;
  }
}
module.exports. getOneByName=async (req,res)=>{
  try{
    const prudact = await prudact.create(req.body);
    res.status(201).send(prudact);
  }catch (error){
    throw error;
  }
}

module.exports. deletProduct=async (req,res)=>{
  try{
    const prudact = await prudact.destroy({
      where:{id:req.params.id},
    });
    res.json(prudact);
  }catch (error){
    throw error;
  }
}
