const express = require('express');
const { getStatsForAllProvinces } = require('../controllers/tableController');
const tableRouter = express.Router();

tableRouter.get('/', getStatsForAllProvinces);

module.exports = tableRouter;
