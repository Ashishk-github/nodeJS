//const http= require('http');
//const fs=require('fs');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
});
app.use((req,res,next)=>{
    console.log('In the next middleware');
    res.send('<h1>Hello People</h1>');
});

//const server=http.createServer(app);
app.listen(4000);
