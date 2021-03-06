const express = require('express');
const path = require('path');

const port = 8080;
const app = express();
app.use(express.static('public'))
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
