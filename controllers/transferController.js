const { transferAmount } = require("../data/data")

const transferBudget = (req, res, next) => {
    const afterTransferDetails = transferAmount(req.body.budget, req.params.from, req.params.to);
    res.status(201).send(afterTransferDetails)
}


module.exports = transferBudget;