const http = require('http');
const port=8000;
const fs=require('fs');


function responseHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type':'text/html'});
    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         console.log('error',err);
    //         return;
    //     }
    //     res.end(data);
    // })

    let filePath;
    switch(req.url){
        case '/home':
    filePath = './index.html';
    break;
        case '/':
        filePath='./index.html'
        break;
        case '/':
        filePath='./index.html';
        break;
        default:
            filePath='404.html'
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            console.log(err);
            return('<h1>error</h1>')
        }else{
            return res.end(data);
        }
    })
}
 


const server=http.createServer(responseHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running at port",port);
})
  