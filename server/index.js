require("dotenv").config()
const express = require('express')
const cors = require("cors")
const app = express()
const morgan = require("morgan")

const movieRouter = require("./routes/movies")
const genreRouter = require("./routes/genres")
const port = process.env.PORT || 5000

app.use(cors())
app.use(morgan("dev"))

app.use('/movies', movieRouter)
app.use('/genres', genreRouter)
app.get('/', (req, res) => {
    console.log("get /")
    res.send("Hello world")
})

app.listen(port, () => {
  console.log("app listening on port 5000")
})