const defaultData = require('../data/data20220808.json');
const { headers } = require('../utils/const/requestHeader');
const fetch = require('node-fetch');

const getStatsForHomePage = (req, res) => {
    fetch("https://static.pipezero.com/covid/data.json", {
        method: 'GET',
        headers,
    })
        .then(data => data.json())
        .then(data => {
            res.render('home/index', { total: data.total, today: data.today, layout: 'layout/main' });
        })
        .catch(() => {
            console.log('Invalid data. Using old data');
            res.render('home/index', { total: defaultData.total, today: defaultData.today, layout: 'layout/main' });
        });
}

module.exports = {
    getStatsForHomePage,
};