import { API_URL } from "../constants";
import makeRequestCreator from "../utils/makeRequestCreator";

const searchMovies = async (input, setResult, setLoading) => {
  try {
    // ganti dulu pada backend searchnya
    const query = `${API_URL}/movies/search/${input}`
    const res = await makeRequestCreator(query)
    setLoading(false)
    console.log(res)
    setResult(res.data.results)
  }catch(err) {
    console.log(err)
  }
}

export default searchMovies