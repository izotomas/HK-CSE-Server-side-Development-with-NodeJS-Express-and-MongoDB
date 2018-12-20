const http = require('http'), 
    fs = require('fs'), 
    path = require('path'),
    hostname = 'localhost', 
    port = 3000; 

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        var fileUrl, 
            filePath, 
            fileExt;
        if (req.url === '/') {
            fileUrl = '/index.html';
        }
        else {
            fileUrl = req.url;
        }
        filePath = path.resolve('./public' + fileUrl);
        fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            fs.exists(filePath,  (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
                
            })            
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} not an html file</h1></body></html>`);

            return;
        }    
    }
    else {
        
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);

        return;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
