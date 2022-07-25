const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        res.status(200).send('Hello World')
    })


module.exports = router;