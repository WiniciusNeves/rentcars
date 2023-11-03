const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO', {
  host: 'localhost',
  dialect: 'mysql',
});

const Veiculo = sequelize.define('veiculo', {
  locadora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  motor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  numero_portas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo_cambio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ar_condicionado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Veiculo;