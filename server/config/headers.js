require("dotenv").config()

const defaultHeader = {
    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPIDAPI_KEY
}

module.exports = { defaultHeader }