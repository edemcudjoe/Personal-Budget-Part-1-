const express = require('express');
const router = require('./server');
const app = express();
const bodyParser = require('body-parser')

const PORT = 3003;

app.use(bodyParser.json());

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})