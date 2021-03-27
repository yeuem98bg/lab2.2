var http = require('http');

var fs = require('fs');

http.createServer(function (req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'});

    var url = req.url;
    if ((url == '/')){
        fs.readFile('lab2' +
            '.html', function (error, data){
            if (error == null){
                res.write(data);
                res.end();
            }else {
                res.end(error);
            }
        });

    }else  if ((url == '/Insert')){
        fs.writeFile('test.txt', 'Ghi vao file', function (error){
            if (error == null){
                res.end("Ghi thanh cong");
            }else {
                res.end(error);
            }
        });

    }else if (url == '/Append'){
        fs.appendFile('test.txt', 'Ghi vao file lan 2', function (error) {
        if (error == null){
                res.end("Ghi thanh cong");
            }else {
                res.end(error);
            }
        });
    }else if (url == '/Unlink'){
        fs.unlink('test.txt', function (error) {
            if (error == null) {
                res.end("xoa thanh cong");
            } else {
                res.end(error);
            }
        });
    }else if (url == '/Rename'){
            fs.rename('test.txt','test2.txt', function (error) {
                if (error == null) {
                    res.end("rename thanh cong");
                } else {
                    res.end(error);
                }
            });
    }else {
        res.end("404 Not Found");
    }

}).listen(8080);
