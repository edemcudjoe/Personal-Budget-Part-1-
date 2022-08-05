const { newEnvelope, allEnvelopes, getEnvelopeById, editAnEnvelope, removeAnEnvelope } = require("../data/data")

const createEnvelope = (req, res, next) => {
    const envelopeCreated = newEnvelope(req.body);

    if (envelopeCreated.message === null) {
        res.status(400).send(`Invalid Budget. Budget Balance: ${envelopeCreated.totalBudget}`)
    }
    res.status(201).send(envelopeCreated);
}


const getAllEnvelopes = (req, res, next) => {
    const allAvailableEnvelopes = allEnvelopes();

    // console.log(req)
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


const deleteAnEnvelope = (req, res, next) => {
    const envelopeDeleted = removeAnEnvelope(req.params.id);

    if (!envelopeDeleted) {
        res.status(404).send('Envelope With Given ID Not Found')
    }

    res.status(204).send('Envelope Deleted!!!')

}

module.exports = {
    createEnvelope,
    getAllEnvelopes,
    getAnEnvelope,
    updateAnEnvelope,
    deleteAnEnvelope
}