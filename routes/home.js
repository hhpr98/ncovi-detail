const express = require('express');
const homeRouter = express.Router();

const defaultOptions = { layout: 'layout/main' };

homeRouter.get('/', function (req, res) {
    res.render('home/index', defaultOptions);
});

module.exports = homeRouter;