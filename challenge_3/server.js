const Customers = require('./database/model.js');

const controller = {
  
};

const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(controller.get)
  .post(controller.post)

router
  .route('/:id')
  .put(controller.put)
  .delete(controller.delete)


const bodyParser = require('bodyParser');
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