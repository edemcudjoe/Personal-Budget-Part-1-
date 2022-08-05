const { idsExist, balanceChecker } = require("../data/data");

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

const transferValidator = (req, res, next) => {
    const idsObj = {...req.params};

    const correctIds = idsExist(idsObj);
    const withinBudgetLimit = balanceChecker(req.params.from, req.body.budget);

    if (!correctIds && withinBudgetLimit === null) {
        return res.status(404).send('Incorrect Ids');
    }
    if (!correctIds && withinBudgetLimit === false) {
        return res.status(400).send('Incorrect Ids and Invalid Budget')
    }
    if (!withinBudgetLimit) {
        return res.status(400).send('Invalid Budget Amount Provided')
    }

    next();
}


module.exports = {
    envelopeDetailsValidator,
    transferValidator
}