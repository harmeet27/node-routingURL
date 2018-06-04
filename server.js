const http = require("http");
const app = require("./app");

http.createServer(app.handlesRequest).listen(8000);