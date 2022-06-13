const http= require('http');
const fs=require('fs');
const requestHandler=require('./routes.');
const server=http.createServer(routes.handler);
server.listen(4000);
