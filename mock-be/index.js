const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;

app.use(cors());
app.get('/request-loan/:amount', (req, res) => {
    let isLoanApproved = req.params.amount < 1000000 && Math.random() < 0.8;
    let interestRate = Math.round(Math.random() * 100) / 10;
    const requestLoanJson = {isLoanApproved, interestRate};
    setTimeout(() => {
        res.status(200).json(requestLoanJson);    
    }, 1500);
});

app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})