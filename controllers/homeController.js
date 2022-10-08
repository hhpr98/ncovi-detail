const fetch = require('node-fetch');

const defaultData = require('../data/data20221008.json');
const { headers } = require('../utils/const/requestHeader');
const { URL } = require('../API/URL');

const getStatsForHomePage = (req, res) => {
    fetch(`${URL}`, {
        method: 'GET',
        headers,
    })
        .then(data => data.json())
        .then(data => {
            res.render('home/index', { total: data.total, today: data.today, layout: 'layout/main' });
        })
        .catch(() => {
            console.log('Invalid data. Using old data');
            res.render('home/index', {
                total: defaultData.total,
                today: defaultData.today,
                layout: 'layout/main',
                isError: true,
            });
        });
}

module.exports = {
    getStatsForHomePage,
};
