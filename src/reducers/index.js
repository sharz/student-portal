import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import user from "./authentication";
import studentList from "./studentAction";
import singleStudent from "./studentAction";
import updatedData from "./studentAction";
import deleteStudent from "./studentAction";

export default combineReducers({
  form: reduxFormReducer,
  user,
  studentList,
  singleStudent,
  updatedData,
  deleteStudent
});

