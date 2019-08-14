const Sequelize = require('sequelize');

const dbConnection = new Sequelize ('multistep_checkout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

dbConnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = dbConnection;