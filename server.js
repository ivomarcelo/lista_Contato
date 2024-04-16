import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor Node.js funcionando!');
});

server.listen(3333, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:3333/');
});
