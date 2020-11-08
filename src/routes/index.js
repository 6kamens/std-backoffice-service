const express = require('express');
const router = express.Router();
const example = require('./example');
const transactionRouter = require('./transactionRoute');

router.use('/example',example);
router.use('/transaction', transactionRouter);

module.exports = router;