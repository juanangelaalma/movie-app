import axios from "axios"

const resources = {}

const makeRequestCreator = () => {
  let token

  return async (query) => {
    if(token) {
      // Cancel the previous request before making a new request
      token.cancel()
    }

    // Create a new cancel token
    token = axios.CancelToken.source()

    try {
      if(resources[query]) {
        // Return result if exist
        return resources[query]
      }
      const res = await axios.get(query, { cancelToken: token.token })
      resources[query] = res // store caching result
      return res
    }catch(err) {
      if(axios.isCancel(err)) {
        // Handle if request was cancelled
        console.log('Request Canceled')
      } else {
        // Handle usual errors
        console.log('Something went wrong: ', err.message)
      }
    }
  }
}

export default makeRequestCreator()
