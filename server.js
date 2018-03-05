const http = require('http')
const mimetype = require('mime-types')
const fs = require('fs')
const path = require('path')
const port = 8080

// Predetermined routelist
const routes = {
    '/': '/views/index.html',
    '/index': '/views/index.html',
    '/about': '/views/about.html',
    '/nonexistent-file': '/views/404.html',
    '/img': '/img/img.jpg'
}

// Returns the mimetype of the given parameter or the image/jpg content-type. Query ba a path, file or extension
getContentType = (query) => query == '/img' ? 'image/jpg' : mimetype.lookup(query)

// Handles requests
requestHandler = (req, res) => {
    // Sets the view to '/static/<route>' or uses the 404 page
    const view = (path.join('static', routes[req.url] || '/views/404.html'))

    // If the requested url is not in the routelist, check if it's a request for the image list.
    if (!(req.url in routes)) {
        // Check if request is for image list
        if (req.url === '/images/' || req.url === '/images') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return fs.readdir('./static/img/', (err, files) => files.forEach(file => res.write(`<li>>${file}</li>`)))
        }
        // If route doesn't match available routes in routes object, send 404 and 404 page
        res.writeHead(404, { 'Content-Type': 'text/html' })
        fs.createReadStream(view).pipe(res);
    } else {
        // All is well, send the view and correct content-type
        res.writeHead(200, {'Content-Type': getContentType(req.url)})
        fs.createReadStream(view).pipe(res);
    }
}
// Start server on 8080
http.createServer(requestHandler).listen(port, () => console.log(`Running server on http://localhost:${port}`))