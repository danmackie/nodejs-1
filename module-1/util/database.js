const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'd4nm4ck1320131972', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
