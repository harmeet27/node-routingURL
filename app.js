const url = require('url');
const fs = require('fs');

function renderHtml(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File Not  Find');
        } else {
            res.write(data);
        }

        res.end();
    });
}

module.exports = {
    handlesRequest: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        var path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHtml('./index.html', res);
                break;
            case '/login':
                renderHtml('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('page not found');
                res.end();
        }
    }
}