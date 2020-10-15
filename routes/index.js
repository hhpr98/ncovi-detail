const express = require('express');
const fetch = require('node-fetch');
const moment = require('moment');

const router = express.Router();

const api = "https://ncovi.vnpt.vn/thongtindichbenh_v2";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get("/vietnam", (req, res) => {
  // get api
  (async () => {
    const headers = {
      "Content-Type": "text/json",
    }

    await fetch(api, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(json => {
        // console.log(json.data.VN);
        var dat = json.data.VN;
        dat.sort((a, b) => {
          return b.confirmed - a.confirmed;
        });
        dat.forEach(item => {
          const updated = moment(item.last_update).utcOffset("+0700").format('HH:mm:ss DD/MM/YYYY');
          item.updated = updated;
        });
        res.render("detail/vietnam", { data: dat });
      })
      .catch(err => console.log("API VIETNAM FAIL!!!!!" + err));

  })();
});

router.get("/world", (req, res) => {
  // get api
  (async () => {
    const headers = {
      "Content-Type": "text/json",
    }

    await fetch(api, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(json => {
        var dat = json.data.TG;
        dat.sort((a, b) => {
          return b.confirmed - a.confirmed;
        });
        dat.forEach(item => {
          const updated = moment(item.last_update).utcOffset("+0700").format('HH:mm:ss DD/MM/YYYY');
          item.updated = updated;
        });
        res.render("detail/world", { data: dat });
      })
      .catch(err => console.log("API World FAIL!!!!!" + err));

  })();
});

module.exports = router;