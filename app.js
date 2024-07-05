let express=require('express');
let route=require('./route/route');
const mongoose = require('mongoose');
let cors=require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
let app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/UserAutentications')
.then(()=>{
    console.log('database is connected');
}).catch((error)=>{
    console.log(error);
    console.log('error is in database connection');
});
const sslOptions = {
    key: fs.readFileSync(path.join('C:/Users/Hp', 'key.pem')),
    cert: fs.readFileSync(path.join('C:/Users/Hp', 'cert.pem'))
  };
// app.listen('4001',function(){
//     console.log('sever is running');
// });
https.createServer(sslOptions, app).listen(443, () => {
    console.log('HTTPS Server is running on port 443');
  });
app.use('/user',route);