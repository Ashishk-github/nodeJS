const fs= require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body id="body"><form action="/message" method="POST" ><input id="input" type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    //function createli(){}
    if(url==='/message' && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            var message=parseBody.split("=")[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('location','/');
                return res.end();
            });
        });
        
    }
        res.setHeader('contentType','text/html');
        res.write('<html>');
        res.write('<head><title>My First WebPage</title></head>');
        res.write('<body><h1>My First WebPage</h1></body>');
        res.write('</html>');
        res.end();
    
}
module.exports=requestHandler;