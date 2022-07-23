const express = require('express');
const homeRouter = express.Router();

const options = { layout: 'layout/main' };

homeRouter.get('/', function (req, res) {
    res.render('index', options);
});

module.exports = homeRouter;