const http = require('http');
const path = require('path');
const mimetypes = require('mime-types');

const port = 8080;

onRequest = (req, res) => console.log(req.url, res);

http.createServer(onRequest).listen(port || 8080);
