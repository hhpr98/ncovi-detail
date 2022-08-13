const express = require('express');
const homeRouter = express.Router();
const { getStatsForHomePage } = require('../controllers/homeController');

homeRouter.get('/', getStatsForHomePage);

module.exports = homeRouter;