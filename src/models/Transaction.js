const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    date: Date,
    description: String,
    type: String,
    value: Decimal128,
})

module.export = mongoose.model('Transaction', TransactionSchema );