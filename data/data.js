const envelopesData = [];
let envelopeId = 1;
let totalBudget = 10000;

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
    const findEnvelope = envelopesData.find(envelope => envelope.id === Number(id));
    return findEnvelope;
}


const editAnEnvelope = (id, newInfo) => {
    const validEnvelopeId = envelopesData.findIndex(envelope => envelope.id === Number(id));
    
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
    const envelopeIndex = envelopesData.findIndex(envelope => envelope.id === Number(id));

    if (envelopeIndex === -1) {
        return null;
    }

    envelopesData.splice(envelopeIndex, 1);
    return true;
}

module.exports = {
    newEnvelope,
    allEnvelopes,
    getEnvelopeById,
    editAnEnvelope,
    removeAnEnvelope
}