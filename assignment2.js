const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  let fullPath = path.join(__dirname, '/calculator.html');
  res.sendFile(fullPath);
});
app.post('/operate', function (req, res) {
  console.log(req.body);
  if (req.body.operator == 'mul') {
    const result = parseInt(req.body.num1) * parseInt(req.body.num2);
    res.send(`
            <div>
                <h2>
                    Multiplication of ${req.body.num1} and ${req.body.num2} is ${result}
                </h2>
            </div>`);
  }
  if (req.body.operator == 'add') {
    const result = parseInt(req.body.num1) + parseInt(req.body.num2);
    res.send(`
            <div>
                <h2>
                    Addition of ${req.body.num1} and ${req.body.num2} is ${result}
                </h2>
            </div>`);
  }
  if (req.body.operator == 'sub') {
    const result = parseInt(req.body.num1) - parseInt(req.body.num2);
    res.send(`
            <div>
                <h2>
                    Subtraction of ${req.body.num1} and ${req.body.num2} is ${result}
                </h2>
            </div>`);
  }
  if (req.body.operator == 'div') {
    const result = parseInt(req.body.num1) / parseInt(req.body.num2);
    res.send(`
            <div>
                <h2>
                    Division of ${req.body.num1} and ${req.body.num2} is ${result}
                </h2>
            </div>`);
  }
});
app.listen(3001);
console.log('3001 port is activated now');
