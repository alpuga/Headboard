const express   = require('express');
const mongoose  = require('mongoose');

let app = express();
let port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static(__dirname));



let server = app.listen(port, () => {
  console.log('server is running on port', server.address().port);
});
