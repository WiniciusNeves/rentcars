const express = require('express');
const path = require('path');
const app = express();

function adicionarEntrada() {
  app.get('/Criar', (req, res) => {
    res.sendFile(path.join(__dirname, '/Criar.html'));
  });
  app.get('/Criar.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/Criar.css'));
  });
  app.get('/Criar.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/Criar.js'));
  });
}

app.listen(3000, () => {
  adicionarEntrada();
});