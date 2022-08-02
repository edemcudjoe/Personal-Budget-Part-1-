const express = require('express');
const { createEnvelope, getAllEnvelopes, getAnEnvelope, updateAnEnvelope } = require('../controllers/envelopeController');
const { envelopeDetailsValidator } = require('../controllers/validationController');
const envelopesRouter = express.Router();

envelopesRouter
    .route('/')
    .get(getAllEnvelopes)
    .post(envelopeDetailsValidator, createEnvelope)

envelopesRouter
    .route('/:id')
    .get(getAnEnvelope)
    .put(envelopeDetailsValidator, updateAnEnvelope)

module.exports = envelopesRouter;