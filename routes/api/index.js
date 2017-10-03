const router = require("express").Router();
const bookRoutes = require("./books");
const scraper = require("./scrape");

// Book routes
router.use("/books", bookRoutes);
router.use("/scrape", scraper);


module.exports = router;
