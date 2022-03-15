const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  const completePath = path.join(__dirname, 'registration.html');
  res.sendFile(completePath);
});
app.post('/login', function (req, res) {
  console.log('login called');
  console.log(req.body);
  let data = req.body;
  res.send(
    `<style>
    div { 
        background:#9BC86A; 
        font:400 14px 'Calibri','Arial';
        padding:20px;
        width:400px;
        margin:auto;
      }
      td{
        border: 4px solid #bdb4db;
        padding: 10px;
        background: #ffffff;
        border-radius:20px;
    }
    table{
        background: #bdb4db;
    }
    h1 {
        color: rgb(201, 99, 201);
        font-size: 45px;
      }
      </style>
      <body><div><table>
      <h1>Registration Details</h1>
      <tr><td>Username</td><td>${req.body.username}</td></tr>
      <tr><td>Email</td><td>${req.body.email}</td></tr><tr>
      <td>Password</td><td>${req.body.password}</td></tr>
      <tr><td>Date</td><td>${req.body.date}</td></tr>
      <tr><td>City</td><td>${req.body.city}</td></tr>
      <tr><td>Country</td><td>${req.body.country}</td></tr>
      </table></div></body>`
  );
});

app.listen(3001);
console.log('program starts. Listening on port 3001');
