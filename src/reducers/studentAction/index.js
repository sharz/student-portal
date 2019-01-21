import {STUDENT_LIST, CREATE_NEW_STUDENT, UPDATE_EXSITING_STUDENT, DELETE_STUDENT} from "./actions";

export default (state = null, action) => {
  switch (action.type) {
    case STUDENT_LIST:
      return action.payload.data;
    case CREATE_NEW_STUDENT:
      return [action.createdData, ...state];
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.deleteStudent);
    default: return state;
    case UPDATE_EXSITING_STUDENT:
      const students = state.map(student => {
        if (student.id === action.updatedData.id) {
          return action.updatedData;
        }
        return student;
      });
      return students;
  }
};
