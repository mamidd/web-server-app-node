const express = require('express');

let app = express();

app.get('/', (req, res) => {
  // res.send('<h1>HEllo Express!</h1>');
  res.send({
    name: 'Mario',
    likes: [
      'bici',
      'cinema'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
