const { newEnvelope, allEnvelopes, getEnvelopeById, editAnEnvelope } = require("../data/data")

const createEnvelope = (req, res, next) => {
    const envelopeCreated = newEnvelope(req.body);

    if (envelopeCreated.message === null) {
        res.status(400).send(`Invalid Budget. Budget Balance: ${envelopeCreated.totalBudget}`)
    }
    res.status(201).send(envelopeCreated);
}


const getAllEnvelopes = (req, res, next) => {
    const allAvailableEnvelopes = allEnvelopes();

    res.status(200).send(allAvailableEnvelopes);
}


const getAnEnvelope = (req, res, next) => {
    const foundEnvelope = getEnvelopeById(req.params.id);

    if (!foundEnvelope) {
        res.status(404).send('Envelope with given ID does not exist');
    }

    res.status(200).send(foundEnvelope);
}


const updateAnEnvelope = (req, res, next) => {
    const updatedEnvelope = editAnEnvelope(req.params.id, req.body);

    if (updatedEnvelope.data === 'idError') {
        res.status(404).send(updatedEnvelope.message)
    }

    if (updatedEnvelope.data === 'budgetError') {
        res.status(400).send(updatedEnvelope.message)
    }

    res.status(200).send(updatedEnvelope);
}

module.exports = {
    createEnvelope,
    getAllEnvelopes,
    getAnEnvelope,
    updateAnEnvelope
}