const fs=require('fs');
const path =require('path')

// //file directory and create folder 
// // fs.mkdir(path.join(__dirname,'/test'),{},function(err){
// //     if(err) throw err;
// //     console.log('Folder created ..')
// // })

// //create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',function(err){
//     if(err) throw err;
//     console.log('Folder written to ..');
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love node js',function(err){
//         if(err) throw err;
//         console.log('Folder written to ..')
//     })
// })


//READ file 

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })


//Rename a file

fs.rename(path.join(__dirname,'/test','hello.txt'),
          path.join(__dirname,'/test','helloworld.txt'),(err)=>{
    if(err) throw err;
    console.log('file renamed')
})