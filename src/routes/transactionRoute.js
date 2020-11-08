const express = require('express');
const transactionController = require('../controllers/transactionController');
const { route } = require('./example');
const router = express.Router();

router.post('/add-transaction',transactionController.addTransaction);

module.exports = router;