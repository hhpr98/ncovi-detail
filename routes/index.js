const express = require('express');
const chartRouter = require('./chart');
const homeRouter = require('./home');
const tableRouter = require('./table');
const router = express.Router();

router.use('/', homeRouter);
router.use('/stats', tableRouter);
router.use('/chart', chartRouter);

module.exports = router;
