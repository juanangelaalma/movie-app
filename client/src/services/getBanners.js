import axios from "axios";
import { API_URL } from "../constants"

const getBanners = async (setBanners) => {
  const response = await axios.get(API_URL + "/movies/popular/contentRating")
  const { data } = response
  setBanners(data)
}

export default getBanners