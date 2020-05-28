const express = require('express')
const app = express()
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})