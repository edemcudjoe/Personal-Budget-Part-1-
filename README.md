# Personal Budget app

## Details

Run node app.js to start the server.

The data and functions for manipulating non-persistence database found in `data.js` file.

Base URL: 'http://localhost:3003/envelopes/'

## Features

Create envelopes(requires title(string) and budget(integer))

Get all envelopes and single envelope by id

Update envelope by id

Delete envelope by id

Transfer funds from an envelope's balance to another envelope. (URL should be 'http://localhost:3003/envelopes/transfer/:from/:to/')
