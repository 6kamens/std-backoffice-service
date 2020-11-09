const express = require('express');
const transactionController = require('../controllers/transactionController');
const { route } = require('./example');
const router = express.Router();

router.post('/add-transaction',transactionController.addTransaction);
router.get('/get-transaction-by-code/:code', transactionController.getTransactionByCode);
router.get('/get-transaction-by-status/:status/:index/:size', transactionController.getTransactionByStatus);
router.get('/get-transaction-by-id/:id', transactionController.getTransactionById );
router.delete('/delete-transaction/:id', transactionController.deleteTransaction);
router.put('/edit-job-status', transactionController.editJobStatus);

module.exports = router;