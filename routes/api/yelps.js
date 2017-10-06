'use strict';

const yelp = require('yelp-fusion');
const router = require("express").Router();

//initial yelp api request
router.route("/").get(function(req, res) {


    var yelpsArray = [];

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
        for (var i = 0; i < response.jsonBody.businesses.length; i++) {
          let result = response.jsonBody.businesses[i];
          yelpsArray.push({
            id: result.id,
            name: result.name,
            url: result.url,
            imgurl: result.image_url,
            reviewcount: result.review_count,
            rating: result.rating
          });

        }
        res.send(yelpsArray);
        //console.log("HERE",yelpsArray);
      });
    }).catch(e => {
      console.log(e);
    });


    return yelpsArray;

});

//yelp API request after user fills in form
router.route("/:user/:city").get(function(req, res) {


    var yelpsArray = [];
    console.log('params',req.params);
    var searchQ = req.params.user;
    var searchCity = req.params.city;


    // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const clientId = 'XiRz39vrkGu65biSMp075A';
    const clientSecret = 'OOwwfUb10CQT4GkACMmAUfxrCMZikssK2QqrvekGa6L5foQKSW5ion7haMCjUJuk';

    const searchRequest = {
      term: searchQ,
      location: searchCity
    };

    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(searchRequest).then(response => {
        for (var i = 0; i < response.jsonBody.businesses.length; i++) {
          let result = response.jsonBody.businesses[i];
          yelpsArray.push({
            id: result.id,
            name: result.name,
            url: result.url,
            imgurl: result.image_url,
            reviewcount: result.review_count,
            rating: result.rating
          });

        }
        res.send(yelpsArray);
      });
    }).catch(e => {
      console.log(e);
    });


    return yelpsArray;

});






module.exports = router;
