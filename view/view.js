let mongoose2=require('../model/model');
let getData=async(req,res)=>{
    try{
        let data=await mongoose2.find();
        res.json(data);
    }catch(error){
        console.log(error);
        console.log('error is in get method');
    }
};
let insertData=async(req,res)=>{
    try{
        if(req.body.length!==0){
            let data=await mongoose2.create(req.body);
            res.json(data);
        }else{
            res.json('Data is getting empty');
        }
    }catch(error){
        console.log(error);
        console.log('error is in post method');
    }
}
let updateData=async(req,res)=>{
    try{
        let unique=await req.params.Action;
        let id=await mongoose2.findOne({'Action':unique});
        let data=await mongoose2.findByIdAndUpdate(id,req.body);
        res.json(data);
    }catch(error){
        console.log(error);
        console.log('error is in put method');
    }
}
let getDetails=async(req,res)=>{
    try{
        let email=await req.body.Email;
        let name=await req.body.Name;
        let obj=await mongoose2.findOne({Email:email});
        //res.json(obj.Name);
        if(obj){
            if(obj.Name===name){
                res.json(obj);
            }
            else{
                res.json(404);
            }
        }else{
            res.json(404);
        }
    }catch(error){
        console.log(error);
        res.json('error is occured while checking data into a database');
    }
}
module.exports={
    getData,
    insertData,
    updateData,
    getDetails
};