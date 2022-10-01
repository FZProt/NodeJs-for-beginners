const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello</h1>");
//     res.end();
// });

// server.listen(7777);

const server = http.createServer((req, res) => {
    res.writeHead(201, {"Content-type":"text/html"});
    res.write("<h1>Hello</h1>");
    res.end();
});



module.exports = { server };
