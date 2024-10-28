// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello World\n');
});
//status a simple http server locally on port 300
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000')
});
// executar  com 'node httpserver.mjs'