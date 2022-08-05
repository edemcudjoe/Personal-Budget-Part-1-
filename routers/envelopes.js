const express = require('express');
const { createEnvelope, getAllEnvelopes, getAnEnvelope, updateAnEnvelope, deleteAnEnvelope } = require('../controllers/envelopeController');
const { envelopeDetailsValidator } = require('../controllers/validationController');
const transferRouter = require('./transfer');
const envelopesRouter = express.Router();

envelopesRouter
    .route('/')
    .get(getAllEnvelopes)
    .post(envelopeDetailsValidator, createEnvelope)

envelopesRouter
    .route('/:id')
    .get(getAnEnvelope)
    .put(envelopeDetailsValidator, updateAnEnvelope)
    .delete(deleteAnEnvelope)

envelopesRouter.use('/transfer', transferRouter);

module.exports = envelopesRouter;