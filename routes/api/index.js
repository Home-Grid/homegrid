const router = require("express").Router();

const wordRoutes = require("./words");
const scraper = require("./scrape");
// word / scrapping routes
router.use("/words", wordRoutes);
router.use("/scrape", scraper);

module.exports = router;
