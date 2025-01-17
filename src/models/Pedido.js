import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const Pedido = sequelize.define('Pedido', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sabor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    acompanhamento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'pedidos', // Nome da tabela
    timestamps: false, // Caso não queira usar createdAt e updatedAt
});

export default Pedido;
