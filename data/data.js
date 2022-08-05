const envelopesData = [];
let envelopeId = 1;
let totalBudget = 10000;

const findEnvelopeInfo = (id) => {
    return envelopesData.find(envelope => envelope.id === Number(id));
}

const findEnvelopeIndex = (id) => {
    return envelopesData.findIndex(envelope => envelope.id === Number(id))
}

const newEnvelope = (info) => {
    const newEnv = info;

    if (newEnv.budget <= totalBudget && newEnv.budget > 0) {
        newEnv.id = envelopeId++;
        envelopesData.push(newEnv);
        totalBudget -= newEnv.budget;
        return newEnv;
    } else {
        return {
            message: null,
            totalBudget
        }
    }
}


const allEnvelopes = () => {
    return envelopesData;
}


const getEnvelopeById = (id) => {
    const findEnvelope = findEnvelopeInfo(id);
    return findEnvelope;
}


const editAnEnvelope = (id, newInfo) => {
    const validEnvelopeId = findEnvelopeIndex(id);
    
    if (validEnvelopeId === -1) {
        return {
            message: 'Invalid Envelope ID',
            data: 'idError'
        }
    }

    let newTotalBudget = totalBudget + (envelopesData[validEnvelopeId].budget - newInfo.budget);

    if (newTotalBudget < 0) {
        return {
            message: `Invalid Budget. Available Budget Balance = ${totalBudget}. \nOver budget by: ${newTotalBudget}`,
            data: 'budgetError'
        }
    }

    totalBudget += (envelopesData[validEnvelopeId].budget - newInfo.budget);
    envelopesData[validEnvelopeId].title = newInfo.title;
    envelopesData[validEnvelopeId].budget = newInfo.budget;
    return envelopesData[validEnvelopeId];

}


const removeAnEnvelope = (id) => {
    const envelopeIndex = findEnvelopeIndex(id);

    if (envelopeIndex === -1) {
        return null;
    }

    envelopesData.splice(envelopeIndex, 1);
    return true;
}


const balanceChecker = (id, budget) => {
    const findEnvelope = findEnvelopeInfo(id);

    if (findEnvelope) {
        const validBudget = (budget <= findEnvelope.budget);
        return validBudget;
    } else {
        return null;
    }

}


const idsExist = (obj) => {
    let objKeys = Object.keys(obj);

    let boolResponse = objKeys.every(key => {
        let found = findEnvelopeIndex(obj[key]);
        return found !== -1;
    })

    return boolResponse;

}


const transferAmount = (amount, sourceId, targetId) => {
    const sourceEnvelope = findEnvelopeInfo(sourceId);
    const targetEnvelope = findEnvelopeInfo(targetId);

    sourceEnvelope.budget -= amount;
    targetEnvelope.budget += amount;

    return {
        "New Balances": {
            "Debited Envelope Details": sourceEnvelope,
            "Credited Envelope Details": targetEnvelope
        }
    }
}

module.exports = {
    newEnvelope,
    allEnvelopes,
    getEnvelopeById,
    editAnEnvelope,
    removeAnEnvelope,
    idsExist,
    balanceChecker,
    transferAmount
}