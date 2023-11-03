const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
