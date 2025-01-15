const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pedidos', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;