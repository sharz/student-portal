const axios = require("axios");

const api = {
  doPostRequest: (url, data, headers) => axios.post(url, data, headers),
  doDeleteRequest: (url, data, headers) => axios.delete(url, data, headers),
  doUpateRequest: (url, data, headers) => axios.put(url, data, headers),
  doGetRequest: url => axios.get(url)
};

export default api;
