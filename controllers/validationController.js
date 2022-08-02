const envelopeDetailsValidator = (req, res, next) => {
    let newEnvelopeInfo = {...req.body}

    if (!(newEnvelopeInfo.title && newEnvelopeInfo.budget)) {
        return res.status(400).send("Provide Info for all Fields")
    }

    if (typeof newEnvelopeInfo.title !== 'string') {
        return res.status(400).send('Title should be text');
    }

    if (typeof newEnvelopeInfo.budget !== 'number') {
        return res.status(400).send('Budget should be a number');
    }

    next();
}

const idValidator = (req, res, next) => {

}


module.exports = {
    envelopeDetailsValidator
}