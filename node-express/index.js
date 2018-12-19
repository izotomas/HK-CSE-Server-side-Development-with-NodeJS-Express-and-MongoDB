// dependencies
const express = require('express'), 
    http = require('http'), 
    morgan = require('morgan'), 
    bodyParser = require('body-parser'), 
    dishRouter = require('./routes/dishRouter.js');

// constants
const hostname = 'localhost', 
    port = 3000;

const app = express();

// middle-ware
app.use(morgan('dev'));
app.use(bodyParser.json()); // sets body to req.body
app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});


// run server
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
