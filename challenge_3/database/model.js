const Sequelize = require('sequelize');
const dbConnection = require('./index.js');

const Customers = dbConnection.define('customers', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_line2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shipping_zip_code: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  credit_card_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expiry_date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cvv: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  billing_zip_code: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  // options
  timestamps: false
});

module.exports = Customers;