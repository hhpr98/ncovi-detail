const defaultData = require('../data/data20220808.json');
const fetch = require('node-fetch');

const getStatsForHomePage = (req, res) => {
    fetch("https://static.pipezero.com/covizd/data.json", {
        method: 'GET',
        headers: {
            "Content-Type": "text/json",
        },
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            res.render('home/index', { total: data.total, today: data.today, layout: 'layout/main' });
        })
        .catch(err => {
            console.log('Invalid data. Using old data');
            res.render('home/index', { total: defaultData.total, today: defaultData.today, layout: 'layout/main' });
        });
}

module.exports = {
    getStatsForHomePage,
};