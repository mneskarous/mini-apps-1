const controller = require('./controller.js');
const express = require('express');

const router = express.Router();

router
  .route('/')
  .post(controller.post)

module.exports = router;