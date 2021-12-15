const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/sindan', (req, res) => {
  res.render('sindan.ejs');
});

app.get('/output', (req, res) => {
  res.render('output.ejs');
});

app.listen(3000);