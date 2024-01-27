const path = require('path');
const express = require('express');
const router = express.Router();
const server = require('./server');
const bodyparser = require('body-parser')
const Veiculos = require('./config/database');

router.get('/Criar', (req, res) => {
  res.sendFile(__dirname + "/frontend/Criar.html");
});
router.post('/Criar', (req, res) => {
  const { id, locadora, modelo, marca, ano, motor, numero_portas, tipo_cambio, ar_condicionado } = req.body;

  let arCondicionado = parseInt(ar_condicionado);
  if (isNaN(arCondicionado)) {
    arCondicionado = 0;
  }

  Veiculos.create({
    id,
    locadora,
    modelo,
    marca,
    ano,
    motor,
    numero_portas,
    tipo_cambio,
    ar_condicionado: arCondicionado
  })
    .then(function () {
      res.sendFile(__dirname + "/frontend/index.html");
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get('/listas', (req, res) => {
  const htmlPath = path.resolve(__dirname + "/frontend/Listagem.html");
  res.sendFile(htmlPath);
});

router.get('/Listagem', (req, res) => {
  Veiculos.findAll({ attributes: ['id', 'locadora', 'modelo', 'marca', 'ano', 'motor', 'numero_portas', 'tipo_cambio', 'ar_condicionado'] })
    .then(function (veiculos) {
      const options = veiculos.map(veiculo => `
      <option value="${veiculo.id}">
        ID é: ${veiculo.id}, Locadora é: ${veiculo.locadora}, Modelo é: ${veiculo.modelo}, Marca é: ${veiculo.marca}, Ano é: ${veiculo.ano}, Motor é: ${veiculo.motor}, Número de Portas é: ${veiculo.numero_portas}, Tipo de Câmbio é: ${veiculo.tipo_cambio}, Ar Condicionado é: ${veiculo.ar_condicionado}
      </option>`
      );

      const select = `<select size="10">${options.join('')}</select>`;
      const voltar = `<a href="/listas">Voltar</a>`;

      res.send(`${select}<br>${voltar}`);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Erro ao recuperar veículos');
    });
});

router.get('/Listagem:id', (req, res) => {
  const id = req.params.id;

  Veiculos.findOne({ where: { id: id } })
    .then(function (veiculo) {
      if (!veiculo) {
        console.error('Veículo não encontrado');
        res.status(404).send('Veículo não encontrado');
        return;
      }

      const selectHTML = `
        <select id="selectVeiculo">
          <option value size="5"="${veiculo.ID}">ID: ${veiculo.id}, Locadora: ${veiculo.locadora}, Modelo: ${veiculo.modelo}, Marca: ${veiculo.marca}, Ano: ${veiculo.ano}, Motor: ${veiculo.motor}, Número de Portas: ${veiculo.numero_portas}, Tipo de Câmbio: ${veiculo.tipo_cambio}, Ar Condicionado: ${veiculo.ar_condicionado}</option>
        </select>
      `;
      
      const voltarButton = '<a href="/listas">Voltar</a>';

      res.send(`${selectHTML} <br> ${voltarButton}`);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Erro ao selecionar veículo');
    });
});


router.get('/save', (req, res) => {
  const htmlAPath = path.resolve(__dirname + "/frontend/Atualizar.html");
  res.sendFile(htmlAPath);
});


router.put('/save/:id', async (req, res) => {
  const id = req.params.id;

  
  if (id === undefined || id === null) {
    res.status(400).send('ID inválido na solicitação');
    return;
  }


  
  const { locadora, modelo, marca, ano, motor, numero_portas, tipo_cambio, ar_condicionado } = req.body;

  const condition = { id: id };
  let arCondicionado = parseInt(ar_condicionado);
  if (isNaN(arCondicionado))

    Veiculos.update(
      {
        locadora,
        modelo,
        marca,
        ano,
        motor,
        numero_portas,
        tipo_cambio,
        ar_condicionado
      },
      {
        where: condition
      }
    )
      .then(function (result) {
        if (result[0] === 1) {
          res.status(200).send('Veículo atualizado com sucesso');
        } else {
          res.status(404).send('Veículo não encontrado');
        }
      })
      .catch(function (error) {
        console.error(error);
        res.status(500).send('Erro ao atualizar veículo');
      });
});

router.get('/Deletar/', (req, res) => {
  const htmlAPath = path.resolve(__dirname + "/frontend/Deletar.html");
  res.sendFile(htmlAPath);
});

router.delete('/Deletar:id', (req, res) => {
  const { id } = req.params;

  Veiculos.destroy({
    where: {
      id: id
    }
  })
    .then(function () {
      res.send('Dados deletados com sucesso!');
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar os dados');
    });
});

router.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname + "/frontend/index.html");
  res.sendFile(htmlPath);
});

module.exports = router;