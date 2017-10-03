const router = require("express").Router();

const wordRoutes = require("./words");
const scraper = require("./scrape");
const yelp = require("./yelps");

// word | scrapping | yelps   - routes
router.use("/words", wordRoutes);
router.use("/scrape", scraper);
router.use("/yelps", yelp);


module.exports = router;
