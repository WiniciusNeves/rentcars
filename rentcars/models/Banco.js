
const Sequelize = require('sequelize');


const sequelize = new Sequelize('basic-mysql', 'testing', 'ANSKk08aPEDbFjDO', {
  host: 'localhost',
  dialect: 'mysql',
});


const Vehicle = sequelize.define('Banco', {
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
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});


sequelize.sync()
  .then(() => {
    console.log('Modelo de veículo sincronizado com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o modelo de veículo:', error);
  });

module.exports = Banco;