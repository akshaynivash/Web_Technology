var http = require('http');
var fs = require('fs');
 
var server= http.createServer(function(request, response ){
    
    response.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile('./example.html',null,function(error,data){
      if(error){
          response.write('<h1>404 Error</h1>');
          response.write('<h2>File not found</h2>');
      }else{
          response.write(data)
      }
      response.end()
    })
    });
    server.listen(process.env.PORT || 3000 ,()=>console.log("server running....."));
