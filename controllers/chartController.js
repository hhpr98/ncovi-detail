const fetch = require('node-fetch');

const defaultData = require('../data/data20230702.json');
const { headers } = require('../utils/const/requestHeader');
const { URL } = require('../API/URL');

const getChartData = (req, res) => {
    fetch(`${URL}`, {
        method: 'GET',
        headers,
    })
        .then(data => data.json())
        .then(data => {
            res.render('chart/chart', {
                date: data.overview.map((item) => item.date),
                cases: data.overview.map((item) => item.cases),
                treating: data.overview.map((item) => item.treating),
                recovered: data.overview.map((item) => item.recovered),
                death: data.overview.map((item) => item.death),
                layout: 'layout/main',
            });
        })
        .catch(() => {
            console.log('Invalid data. Using old data');
            res.render('chart/chart', {
                date: defaultData.overview.map((item) => item.date),
                cases: defaultData.overview.map((item) => item.cases),
                treating: defaultData.overview.map((item) => item.treating),
                recovered: defaultData.overview.map((item) => item.recovered),
                death: defaultData.overview.map((item) => item.death),
                layout: 'layout/main',
                isError: true,
            });
        });
}

module.exports = {
    getChartData,
};
