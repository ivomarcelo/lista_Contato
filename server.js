//carregando o servidor Nodejs
const http = require('http');

// Defina a porta em que o servidor irá ouvir
const PORT = 3000;

// Crie um servidor HTTP
const server = http.createServer((req, res) => {
  // Escreva a resposta HTTP
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Olá, mundo!\n');
});

// Inicie o servidor e faça-o escutar na porta especificada
server.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
/*
//carregando Expreess -->
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rotas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

*/
