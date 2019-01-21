import setAuthorizationToken from "../../utils/setAuthorizationToken";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const setCurrentUser = data => ({
  type: SET_CURRENT_USER,
  data
});

export const postLoginData = (loginData, cb) => (dispatch, state, api) => {
  api.doPostRequest("https://reqres.in/api/login", loginData)
    .then(data => {
      const token = data.data.token;
      if (token) {
        localStorage.setItem("jwtToken", JSON.stringify(token));
        setAuthorizationToken(token);
      }
      cb(data.data);
      dispatch(setCurrentUser(data.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const postRegisterData = (loginData, cb) => (dispatch, state, api) => {
  api.doPostRequest("https://reqres.in/api/register", loginData)
    .then(data => {
      const token = data.data.token;
      if (token) {
        localStorage.setItem("jwtToken", JSON.stringify(token));
        setAuthorizationToken(token);
      }
      cb(data.data);
      dispatch(setCurrentUser(data.data));
    })
    .catch(err => {
      console.log(err);
    });
};
