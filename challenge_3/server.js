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
    const { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode } = req.body;
    Customers
      .create({ name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode })
      .then(() => res.status(201).send('POST successful'))
      .catch(err => console.error(err));
  },

  update: (req, res) => {
    const { name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode } = req.body;
    const { id } = req.params;
    Customers
      .update({ name, email, password, addressLine1, addressLine2, city, state, shippingZipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode }, { where: { id } })
      .then(() => res.status(202).send('PUT successful'))
      .catch(err => console.error(err));
  },

  delete: (req, res) => {
    const { id } = req.params;
    Customers
      .destroy({ where: { id } })
      .then(() => res.status(203).send('DELETE successful'))
      .catch(err => console.error(err));
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
  .put(controller.update)
  .delete(controller.delete)


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