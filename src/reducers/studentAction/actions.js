export const STUDENT_LIST = "STUDENT_LIST";
export const CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_EXSITING_STUDENT = "UPDATE_EXSITING_STUDENT";

export const getAllStudentList = cb => (dispatch, state, api) => {
  console.log("call all records");
  api.doGetRequest("https://reqres.in/api/users?per_page=100", {})
    .then(data => {
      cb(data.data);
      console.log(data.data);
      dispatch({
        type: STUDENT_LIST,
        payload: data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};


export const postCreateStudent = (studentData, cb) => (dispatch, state, api) => {
  api.doPostRequest("https://reqres.in/api/users", studentData)
    .then(data => {
      console.log(data.data);
      cb(data.data);
      dispatch({
        type: CREATE_NEW_STUDENT,
        createdData: data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteStudent = (id, cb) => (dispatch, state, api) => {
  api.doDeleteRequest(`https://reqres.in/api/users/${id}`, id,
    {headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }})
    .then(data => {
      console.log(data.data);
      cb(data.data);
      dispatch({
        type: DELETE_STUDENT,
        deleteStudent: id
      });
    })
    .catch(err => {
      console.log(err);
    });
};


export const updateSingleStudent = (singleStudentData, cb) => (dispatch, state, api) => {
  api.doUpateRequest(`https://reqres.in/api/users/${singleStudentData.id}`, singleStudentData,
    {headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }})
    .then(data => {
      console.log(data.data);
      console.log(state().studentList);
      cb(data.data);
      dispatch({
        type: UPDATE_EXSITING_STUDENT,
        updatedData: data.data,
        studentList: state().studentList
      });
    })
    .catch(err => {
      console.log(err);
    });
};
