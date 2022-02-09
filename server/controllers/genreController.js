require('dotenv').config()
const axios = require("axios")

const { defaultHeader } = require("../config/headers")

const getGenres = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: process.env.EXTERNAL_API + '/genres/',
            headers: defaultHeader
        }
        const response = await axios.request(options)
        const { data } = response
        res.send(data)
    }catch(err) {
        console.log(err)
        res.status(401).send(err)
    }
}

module.exports = { getGenres }