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
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressLine2: {
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
  shippingZipCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creditCardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expiryDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingZipCode: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // options
  timestamps: false
});

Customers.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return Customers.create({
    name: 'John Hancock',
    email: 'jhancock@gmail.com',
    password: 'firstsig',
    addressLine1: '123 Fake St.',
    addressLine2: null,
    city: 'New York',
    state: 'NY',
    shippingZipCode: '10001',
    phoneNumber: '123-456-7890',
    creditCardNumber: '4000200060003000', 
    expiryDate: '01/2040',
    cvv: '123',
    billingZipCode: '10001'
  });
});

module.exports = Customers;