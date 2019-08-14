const Customers = require('./database/model.js');

const controller = {
  
  get: (req, res) => {
    Customers.findAll()
      .then(allCustomers => {
        res.status(200).send(allCustomers);
      })
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    let { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode } = req.body;
    Customers.create(
      { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode }
    )
    .then(() => res.status(201).send('POST successful'))
    .catch(err => console.error(err));
  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }

};

const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  .route('/:id')
  // .put(controller.put)
  // .delete(controller.delete)


const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', router);

app.listen(port, () => console.log(`app is listening on port ${port}`));

module.exports = app;