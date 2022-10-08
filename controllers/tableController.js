const fetch = require('node-fetch');

const defaultData = require('../data/data20220808.json');
const { headers } = require('../utils/const/requestHeader');
const { URL } = require('../API/URL');

const getStatsForAllProvinces = (req, res) => {
    fetch(`${URL}`, {
        method: 'GET',
        headers,
    })
        .then(data => data.json())
        .then(data => {
            res.render('table/table', { locations: data.locations, layout: 'layout/main' });
        })
        .catch(() => {
            console.log('Invalid data. Using old data');
            res.render('table/table', {
                locations: defaultData.locations,
                layout: 'layout/main',
                isError: true,
            });
        });
}

module.exports = {
    getStatsForAllProvinces,
};
