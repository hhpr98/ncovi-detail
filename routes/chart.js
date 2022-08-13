const express = require('express');
const chartRouter = express.Router();

chartRouter.get('/', (req, res) => {
    res.render('chart/chart', { layout: 'layout/main' });
});

module.exports = chartRouter;
