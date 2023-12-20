const express = require('express');
const {
    createTransaction, 
    deleteTransaction,
    
    getTransaction,
    getTransactions,
    updateTransaction,
} = require('../controllers/transactions')

const router = express.Router();

router
  .route('/')
  .get(getTransactions)
  .get(getTransaction)
  .post(createTransaction)

router
  .route('/:id')
  .get(getTransaction)
  .delete(deleteTransaction)
  .put(updateTransaction)

module.exports = router;