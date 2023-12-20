const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./src/config/db')
const app = express();
//Route files

const transactions = require('./src/routes/transactions')

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
}
app.use(logger)
app.use(express.json());

connectDB();
app.use('/account/transactions', transactions);

const port = process.env.PORT | 5000;
const server =  app.listen(port, () => {
    console.log(`listening on port ${port} on ${process.env.NODE_ENV}`)
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
})