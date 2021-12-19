const express = require('express');
const mysql = require('mysql');

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


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yama0713',
  database: 'watchlist'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/list', (req, res) => {
  connection.query(
    'select * from list',
    (error,results) =>{
      console.log(results);
      res.render('list.ejs',{list: results});
    });
});

app.listen(3000);