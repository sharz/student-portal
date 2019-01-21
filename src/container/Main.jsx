import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import NavBar from "../component/NavBar";
import Drawer from "../component/Drawer";
import Login from "./Login";
import Register from "./Register";
import StudentList from "./StudentList";
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3
  }
});
class Main extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        {this.props.user.isAuthenticated ? <Drawer /> : null}
        <main className={classes.content}>
          <Switch>
            {this.props.user.isAuthenticated ? <div>
              <Route exact path="/student-list" component={StudentList} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/create-user" component={CreateUser} />
            </div> : <div>
              <Route path="/login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Redirect to="/login" />
            </div>}
          </Switch>
        </main>
      </div>

    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});
export default withRouter(connect(mapStateToProps, null)(withStyles(styles)(Main)));
