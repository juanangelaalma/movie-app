import axios from "axios"
import { API_URL } from "../constants"

const getGenres = async (setGenres) => {
  const response = await axios.get(API_URL + "/genres")
  const { results } = response.data
  setGenres(results)
}

export default getGenres