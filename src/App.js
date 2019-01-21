import React, {Component} from "react";
import {Provider} from "react-redux";
import {store} from "./store";
// import {BrowserRouter} from "react-router-dom";
// import NavBar from "../src/component/NavBar";
// import Login from "../src/container/Login";
// import Register from "../src/container/Register";
import Main from "../src/container/Main";
import {BrowserRouter} from "react-router-dom";

// const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
