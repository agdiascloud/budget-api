
exports.getTransactions = (req, res, next) => {
  res
    .status(200)
    .json({success: true, msg: `show all transactions mano`})    
}

exports.getTransaction = (req, res, next) => {
    res 
      .status(200)
      .json({ success: true, msg: `Show transaction ${req.params.id}`});
}


// @desc  Create a transaction
// @route /account/transaction
// @access Public

exports.createTransaction = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create a transaction'})
}

exports.updateTransaction = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update  transaction ${req.params.id}`})
    
}

exports.deleteTransaction = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete transaction ${req.params.id}`})
}