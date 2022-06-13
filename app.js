const http= require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>Welcome to About us Page</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>NodeJS Page</title></head>');
        res.write('<body><h1>Welcome to my NodeJS Page</h1></body>');
        res.write('</html>');
        res.end();
    }else{
        res.setHeader('contentType','text/html');
        res.write('<html>');
        res.write('<head><title>My First WebPage</title></head>');
        res.write('<body><h1>My First WebPage</h1></body>');
        res.write('</html>');
        res.end();
    }
});
server.listen(4000);
