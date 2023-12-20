const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
//Route files

const transactions = require('./src/routes/transactions')



app.use(express.json());

app.use('/account/transactions', transactions);





const port = process.env.PORT | 5000;

app.listen(port, () => {
    console.log(`listening on port ${port} on ${process.env.NODE_ENV}`)
})