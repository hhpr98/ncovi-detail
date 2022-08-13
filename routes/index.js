const express = require('express');
const homeRouter = require('./home');
const tableRouter = require('./table');
const router = express.Router();

router.use('/', homeRouter);
router.use('/stats', tableRouter);

module.exports = router;
