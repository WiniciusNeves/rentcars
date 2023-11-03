const express = require('express');
const Sequelize = require('sequelize');
const database = require('./src/index');
const veiculo = require('./src/db');

const api = express();
api.use(express.json());

api.get('/Listagem.html', async (req, res) => {
  try {
    const result = await veiculo.findAll();
    res.json(result);
  } catch (error) {
    res.json({ status: 'fail' });
  }
});

api.get('/Listagem.html/:id', async (req, res) => {
  try {
    const result = await veiculo.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({ status: 'fail' });
  }
});

api.post('/criar', async (req, res) => {
  const { id, locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado } = req.body;
  const arCondicionado = ar_condicionado === 'on' ? true : false;

  try {
    await veiculo.create({
      id,
      locadora,
      modelo,
      marca,
      ano,
      motor,
      portas,
      cambio,
      ar_condicionado: arCondicionado,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.json({ status: 'fail' });
  }
});

api.put('/atualizar/:id', async (req, res) => {
  const { id, locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado } = req.params;
  const arCondicionado = ar_condicionado === 'on' ? true : false;

  try {
    const result = await veiculo.findByPk(id);
    if (result) {
      await result.update({
        id,
        locadora,
        modelo,
        marca,
        ano,
        motor,
        portas,
        cambio,
        ar_condicionado: arCondicionado,
      });
      res.json(result);
    } else {
      res.json({ status: 'fail', message: 'Record not found' });
    }
  } catch (error) {
    res.json({ status: 'fail' });
  }
});

api.delete('/deletar/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await veiculo.destroy({
      where: {
        id,
      },
    });
    if (result) {
      res.json({ status: 'ok' });
    } else {
      res.json({ status: 'fail', message: 'Record not found' });
    }
  } catch (error) {
    res.json({ status: 'fail' });
  }
});

module.exports = api;