const express = require("express")
const router = express.Router()

const { getMovieByPopularity } = require("../controllers/movieController")

router.get("/popular/", getMovieByPopularity)

module.exports = router