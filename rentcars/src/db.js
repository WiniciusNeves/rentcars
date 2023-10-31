const Sequelize = require('sequelize');
const sequelize = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307
  });

module.exports = sequelize;