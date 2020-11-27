var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url.path === '/welcome'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Welcome to Dominos!');
        res.end();
    }else if(req.url.path === '/contact'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }));
    }else{
        res.writeHead(404, {});
        res.end();
    }
}
httpServer.listen(8081);
module.exports = httpServer;