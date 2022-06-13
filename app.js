const http= require('http');
const fs=require('fs');
const requestHandler=require('./routes.js');
const server=http.createServer(requestHandler.handler);
server.listen(4000);
