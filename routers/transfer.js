const express = require('express');
const transferBudget = require('../controllers/transferController');
const { transferValidator } = require('../controllers/validationController');
const transferRouter = express.Router();


transferRouter
    .route('/:from/:to')
    .post(transferValidator, transferBudget)



module.exports = transferRouter;    