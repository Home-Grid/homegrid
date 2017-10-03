var cheerio = require("cheerio");
var request = require("request");



const router = require("express").Router();

router.route("/").get(function(req, res) {


    request("https://www.nytimes.com/?module=SectionsNav&action=click&version=BrowseTree&region=TopBar&contentCollection=Home%20Page&pgtype=sectionfront", function(error, response, html) {
        var $ = cheerio.load(html);
        var results = [];
        $(".story-heading").each(function(i, element) {

            var title = $(element).children().text();


            var link = $(element).children().attr("href");

            results.push({
                title: title,
                link: link
            });
        });
        res.send(results);
         console.log(results);
        return results;
       
    });

});




module.exports = router;