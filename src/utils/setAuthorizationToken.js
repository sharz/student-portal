import axios from "axios";

const setAuthorizationToken = token => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common.Authentication = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authentication;
  }
};

export default setAuthorizationToken;
