const express = require('express');
const router = require('./routers/server');
const app = express();
const bodyParser = require('body-parser');
const envelopesRouter = require('./routers/envelopes');

const PORT = 3003;

app.use(bodyParser.json());

app.use('/', router);

app.use('/envelopes', envelopesRouter)


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})