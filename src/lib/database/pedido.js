const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Pedido = sequelize.define('Pedido', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sabor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acompanhamento: {
    type: DataTypes.TEXT, // Armazenar como JSON string
    allowNull: false,
  },
  tamanho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ alter: true }) // Sincroniza o modelo com o banco de dados
  .then(() => console.log('Tabela Pedido sincronizada!'))
  .catch(err => console.error('Erro ao sincronizar tabela Pedido:', err));

module.exports = Pedido;
