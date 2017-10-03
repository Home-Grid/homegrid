var cheerio = require("cheerio");
var request = require("request");



const router = require("express").Router();

router.route("/").get(function(req, res) {


    request("https://www.nytimes.com/?module=SectionsNav&action=click&version=BrowseTree&region=TopBar&contentCollection=Home%20Page&pgtype=sectionfront", function(error, response, html) {
        var $ = cheerio.load(html);
        var results = [];

        $(".story-heading").each(function(i, element) {


            var title = $(element).find("a").text();


            var link = $(element).find("a").attr("href");

            results.push({
                title: title,
                link: link
            });
        });
        res.send(results);
        //console.log(results);
        return results;

    });

});

router.route("/cnn").get(function(req, res) {


    request("http://www.cnn.com/specials/last-50-stories", function(error, response, html) {
        var $ = cheerio.load(html);
        var results = [];
        $("h3.cd__headline").each(function(i, element) {

            var title = $(element).children().children().text();

            var link = $(element).children().attr("href");

            results.push({
                title: title,
                link: link
            });

        });
        res.send(results);
        //console.log(results);
        return results;
    });

});

router.route("/fox").get(function(req, res){
	request("http://www.foxnews.com/", function(error, response, html) {

  var $ = cheerio.load(html);

  var results = [];

  $("article").each(function(i, element) {

    var title = $(element).find("div.info").find("h2.title").children().text();

    var link = $(element).find("div.info").find("h2.title").children().attr("href");

    results.push({
      title: title,
      link: link
    });
  });
 res.send(results);
        //console.log(results);
        return results;
});

})




module.exports = router;
