const http = require('http');
const fs = require('fs');


const port   = process.env.PORT | 3000;

const  server =  http.createServer((req,res)=>{
        // console.log(req.url);
        res.setHeader('Content-Type','text/html');
        if(req.url == '/')
        {
            res.statusCode = 200;
            const data = fs.readFileSync('index.html')
            res.end(data.toString())
        }
        else if(req.url == '/about')
        {
            res.statusCode = 200;
            res.end('<h1> This is About page </h1> <p> You can see our website about us </p>')
        }
        else if(req.url == '/home')
        {
            res.statusCode = 200;
            res.end('<h1> Hello I am Harshad </h1> <p> this is my demo site </p>')

        }
        else{
            res.statusCode = 404;
            res.end('<h1> This is  page not Found </h1> <p> This page not found on server </p>')
        }
}); 

server.listen(port,()=>{
    console.log('server listening port ${port}');
})