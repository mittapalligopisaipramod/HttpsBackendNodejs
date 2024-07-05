let mongoose=require('mongoose');
let obj=new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String 
    }
});
let mongoose2=mongoose.model('Autentications',obj);
module.exports=mongoose2;