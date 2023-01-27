const { text } = require('body-parser');
const http = require('http');

const port   = process.env.PORT | 3000;

const  server =  http.createServer((req,res)=>{
        console.log(req.url);
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end('<h1> Hello I am Harshad </h1> <p> this is my demo site </p>')
}); 

server.listen(port,()=>{
    console.log('server listening port ${port}');
})