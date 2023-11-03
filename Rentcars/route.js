const path = require('path');
const express = require('express');
const router = express.Router();
const veiculo = require('./src/db');
const basePath = path.join(__dirname, 'Pagina');
const server = require('./server');

router.get('/Criar.html', (req, res) => {
  res.sendFile(`${basePath}/Criar.html`);
});

router.get('/Listagem.html', (req, res) => {
  res.sendFile(`${basePath}/Listagem.html`);
});

router.get('/Atualizar.html', (req, res) => {
  const htmlAPath = path.resolve(`${basePath}/Atualizar.html`);
  res.sendFile(htmlAPath);
});

router.get('/Deletar.html', (req, res) => {
  const htmlAPath = path.resolve(`${basePath}/Deletar.html`);
  res.sendFile(htmlAPath);
});

router.get('/', (req, res) => {
  const htmlPath = path.resolve(`${basePath}/index.html`);
  res.sendFile(htmlPath);
});

module.exports = router;