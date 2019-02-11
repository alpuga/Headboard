const express   = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');

let port = process.env.PORT || 3000;
let app = express();

require('dotenv').config();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let Message = mongoose.model('Message', {
  name: String,
  message: String
});

mongoose.connect(process.env.DATABASE, (err, db) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful Database Connection')
  }
});

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  })
});

app.route('/messages')
   .post((req, res) => {
     let message = new Message(req.body);
     message.save((err) => {
     if (err) {
       sendStatus(500);
     }
    res.sendStatus(200);
  })
});


let server = app.listen(port, () => {
  console.log('Server is running on port', server.address().port);
});
