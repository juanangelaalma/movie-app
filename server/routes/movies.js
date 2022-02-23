const express = require("express")
const router = express.Router()

const { getMovieByPopularity, getMovieByContentRating } = require("../controllers/movieController")

router.get("/popular/", getMovieByPopularity)
router.get("/popular/contentRating", getMovieByContentRating)

module.exports = router