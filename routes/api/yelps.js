'use strict';

const yelp = require('yelp-fusion');
const router = require("express").Router();

router.route("/").get(function(req, res) {


    var results = [];

    // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const clientId = 'XiRz39vrkGu65biSMp075A';
    const clientSecret = 'OOwwfUb10CQT4GkACMmAUfxrCMZikssK2QqrvekGa6L5foQKSW5ion7haMCjUJuk';

    const searchRequest = {
      term:'Coffee',
      location: 'Newport Beach, ca'
    };

    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
        results.push(prettyJson);

      });
    }).catch(e => {
      console.log(e);
    });


    res.send(results);
    //console.log(results);
    return results;

});






module.exports = router;
