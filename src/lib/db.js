import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('pedidos', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
.then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
.catch(err => console.error('Erro ao conectar ao banco:', err));

export default sequelize;