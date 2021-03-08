const http=require('http');
const bodyparser = require('body-parser');

const express = require("express");
const app= express();
const port= process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');
const things=require("./routes/things");
app.use(express.json());
app.use("/things",things);
app.use(bodyparser.urlencoded({extended:false})) ;
app.use(bodyparser.json()); 

app.post("/getDirectors",(req,res)=>{
    // req.body.directors = ["name1","name2"];
    req.body.directors.forEach(element => {
        console.log(element);
    });


    res.send("request recieved");
})
app.listen(port,err=>{
    if(err){
        return console.log("ERROR",err)
    }
    console.log(`Listening on port: ${port}`);
});
// app.route("/things/cars")
// .get((req,res)=>{})
// .post((req,res)=>{})

// app.route("/things/cars/:carid")
// .get((req,res)=>{})
// .post((req,res)=>{})

// const server=http.createServer((req,res)=>{
//     //  if(req.url==='/api/users'){
//     //      fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
//     //         // if(err) throw err;
//     //         // res.writeHead(200,{'Content-Type': 'text/html'});
//     //         // res.end(content);
//     //         const users =[
//     //             {name: 'Bob Smith', age:40},
//     //             {name: 'John Doe', age:30 }
//     //         ];
//     //         res.writeHead(200,{'Content-Type': 'application/json'});
//     //         res.end(JSON.stringify(users));
//     //      })
        
//     //  }
//     /// Build File PATH 
//     let filePath = path.join(__dirname,'public',req.url==='/'?
//     'index.html': req.url);
// //extension of file 
// let extname=path.extname(filePath);
// //Initial Content Type 
// let contentType='text/html';

// //Check ext and set content type
// switch(extname){
//     case '.js':
//         contentType='text/javascript';
//         break;
//     case '.css':
//         contentType='text/css';
//         break;
//     case '.json':
//         contentType='application/json';
//         break;
//     case '.png':
//         contentType='image/png';
//         break;
//     case '.jpg':
//         contentType='image/jpg';
//         break;
// }
//  // read file 
//  fs.readFile(filePath,(err,content)=>{
//      if(err){
//         if(err.code=='ENOENT'){
//             //PAGE NOT FOUND
//             fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.end(content,'utf8')
//             });
//         }else{
//             //Some server error
//             res.writeHead(500);
//             res.end(`Server Error: ${err.code}`);
//         } 
//      } else{
//          //Success
//          res.writeHead(200,{'Content-Type': contentType});
//          res.end(content,'utf8')
//      }
//  })
// });

// app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));