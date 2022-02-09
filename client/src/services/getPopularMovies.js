import axios from "axios"
import { API_URL } from "../constants"

const getPopularMovies = async (setPopularMovies) => {
    const response = await axios.get(API_URL + "/movies/popular")
    const { data } = response
    console.log("data" + data)
    setPopularMovies(data)
}

export default getPopularMovies