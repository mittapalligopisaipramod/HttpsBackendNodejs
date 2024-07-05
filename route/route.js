let express=require('express');
let route=express.Router();
let view=require('../view/view');
route.get('/',view.getData);
route.post('/add',view.insertData);
route.post('/getDetails',view.getDetails);
route.put('/update/:Email',view.updateData);
module.exports=route;