const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  locadora: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  motor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero_portas: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tipo_cambio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ar_condicionado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Produto;