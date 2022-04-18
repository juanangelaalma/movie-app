require("dotenv").config();
const axios = require("axios").default;

const { defaultHeader } = require("../config/headers");

const getMovieIdByPopularity = async () => {
  try {
    const options = {
      method: "GET",
      url: process.env.EXTERNAL_API + "/movie/order/byPopularity/",
      params: { page_size: "4" },
      headers: defaultHeader,
    };
    const response = await axios.request(options);
    const data = response.data;

    const results = data.results.map((el) => el.imdb_id); // get id only

    return results;
  } catch (err) {
    return err;
  }
};

const getMovieByPopularity = async (req, res) => {
  try {
    const idMovies = await getMovieIdByPopularity();
    const options = {
      method: "GET",
      headers: defaultHeader,
    };

    const movies = await Promise.all(
      idMovies.map(async (id) => {
        try {
          const res = await axios.request({
            ...options,
            url: `https://data-imdb1.p.rapidapi.com/movie/id/${id}/`,
          });
          return res.data;
        } catch (err) {
          console.log(err);
        }
      })
    );

    const dataToReturn = movies.map(({ results }) => {
        const data = { id: results.imdb_id, title: results.title, year: results.year, rating: results.rating, trailer: results.trailer, image_url: results.image_url, release: results.release }
        return data
    })
    res.send(dataToReturn)
  } catch (err) {
    console.log(err);
  }
};


const getMovieByContentRating = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: process.env.EXTERNAL_API + "/movie/byContentRating/R/",
      params: {
        page_size: 3
      },
      headers: defaultHeader
    }

    const response = await axios.request(options)
    const { data } = response
    const idMovies = data.results.map((el) => el.imdb_id); // get id only

    const movies = await Promise.all(
      idMovies.map(async (id) => {
        try {
          const res = await axios.request({
            ...options,
            url: `${process.env.EXTERNAL_API}/movie/id/${id}/`,
          });
          return res.data;
        } catch (err) {
          console.log(err);
        }
      })
    );

    const dataToReturn = movies.map(({ results }) => {
      const data = { id: results.imdb_id, banner: results.banner, trailer: results.trailer }
      return data
    })

    res.send(dataToReturn)
  }catch(err) {
    res.send(err.message)
    console.log(err)
  }
}

const searchMovieByTitle = async (req, res) => {
  if(!(req.params.keyword)) {
    res.status(400)
    res.send("bad request")
  }
  try{
    const options = {
      method: "GET",
      url: process.env.EXTERNAL_API + `/titles/search/title/${req.params.keyword}`,
      params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
      headers: {
        'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd41ae3a45emsh5e7923ee78fd456p186d3cjsn49cb0743812d'
      }
    }
    const response = await axios.request(options)
    res.send(response.data)
  }catch(err) {
    console.log(err)
  }
}

module.exports = { getMovieByPopularity, getMovieByContentRating, searchMovieByTitle };
