const express = require("express")
const router = express.Router()

const { getMovieByPopularity, getMovieByContentRating, searchMovieByTitle } = require("../controllers/movieController")

router.get("/popular/", getMovieByPopularity)
router.get("/popular/contentRating", getMovieByContentRating)
router.get("/search/:keyword", searchMovieByTitle) // ganti menjadi menggunakan path

module.exports = router