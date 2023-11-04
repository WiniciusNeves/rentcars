const path = require('path');
const express = require('express');
const router = express.Router();
const server = require('./server');
const bodyparser = require('body-parser')
const Veiculos = require('./database');

router.get('/Criar', (req, res) => {
  res.sendFile(__dirname + "/frontend/Criar.html");
});
router.post('/Criar', (req, res) => {
  const { locadora, modelo, marca, ano, motor, numero_portas, tipo_cambio, ar_condicionado } = req.body;

  let arCondicionado = parseInt(ar_condicionado);
  if (isNaN(arCondicionado)) {
  // Lida com o caso em que o valor não é um número inteiro válido
  // Por exemplo, você pode retornar uma resposta de erro ao usuário
}

  Veiculos.create({
      locadora,
      modelo,
      marca,
      ano,
      motor,
      numero_portas,
      tipo_cambio,
      ar_condicionado:arCondicionado
  })
  .then(function() {
      res.send('Dados inseridos com sucesso!');
  })
  .catch(function(error) {
      console.error(error);
  });
  });

router.get('/Listagem.html', (req, res) => {
  res.sendFile(__dirname + "/frontend/Listagem.html");
});

router.get('/Atualizar.html', (req, res) => {
  const htmlAPath = path.resolve(__dirname + "/frontend/Atualizar.html");
  res.sendFile(htmlAPath);
});

router.get('/Deletar.html', (req, res) => {
  const htmlAPath = path.resolve(__dirname + "/frontend+/Deletar.html");
  res.sendFile(htmlAPath);
});

router.get('/pagina-inicial', (req, res) => {
  const htmlPath = path.resolve(__dirname+ "/frontend/index.html");
  res.sendFile(htmlPath);
});

module.exports = router;