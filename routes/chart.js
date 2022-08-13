const express = require('express');
const { getChartData } = require('../controllers/chartController');
const chartRouter = express.Router();

chartRouter.get('/', getChartData);

module.exports = chartRouter;
