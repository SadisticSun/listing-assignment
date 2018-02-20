const http = require('http')
const path = require('path')
const mimetypes = require('mime-types')
const port = 8080

onRequest = (req, res) => {
    console.log(req.url);
}

http.createServer(onRequest)

server.listen(port || 8080)