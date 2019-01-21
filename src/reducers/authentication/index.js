import {SET_CURRENT_USER} from "./actions";
let isAuthenticated = false;

if (localStorage.getItem("jwtToken")) {
  isAuthenticated = true;
}
const initalState = {
  isAuthenticated: isAuthenticated,
  user: localStorage.getItem("jwtToken")
};
export default (state = initalState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.data
      };
    default: return state;
  }
};
