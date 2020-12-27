const express = require('express');
const http = require('http');
const APP_PORT =process.env.PORT || 5000 ;
const router =require('./router');
const app = express();
const server = http.createServer(app);
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
const mysql = require('mysql');

dotenv.config({path: './.env'})







app.use('/', router);






 



// const db = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    port : '3306',
//    password: '',
//    database: 'sampledb'
//  });

//  db.connect((error)=>{
//    if(error){
//        console.log(error)
//    }
//    else{
//        console.log("My Database is Connected!")
//    }
// });




// app.get('/get', (req, res) =>{

//   const sqlSelect = "SELECT * FROM projectdatabase"
//   db.query(sqlSelect, (error, result)=>{
//     console.log(result)
//     res.send(result)
//   })
// })



// app.post('/login', (req, res) =>{

  // const street  = req.body.street
  // const city = req.body.city
  // const province = req.body.province
  // const zip  = req.body.zip
  // const country  = req.body.country       
  // const email = req.body.email
  // const name = req.body.name
  // const number = req.body.number
  // const month  = req.body.month
  // const year  = req.body.year
  // const cvv = req.body.cvv
  
  
  // const sqlIsert = "INSERT INTO onlyfansdb (name,year,cvv,month,number, email,street,city,province,zip,country) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  //   db.query(sqlIsert,[name,year,cvv,month,number, 
  //     email,street,city,province,zip,country], (error, result)=>{
  //   console.log(error)
  //   res.send('hello ')
  // })
  
  
  // })

mongoose
.connect('mongodb+srv://dangolden:olaadura123@cluster0.lryys.mongodb.net/places?retryWrites=true&w=majority')
.then(()=>{
  app.listen(APP_PORT, () => {
    console.log(`server is runing at  ${APP_PORT}`)
 })
})
.catch((err)=>{
  console.log(err)
})


