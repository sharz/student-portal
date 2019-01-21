import React, {Component} from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {reduxForm, Field} from "redux-form";
import validate from "../component/Validate";
import {TextField} from "redux-form-material-ui";
import {MuiThemeProvider, getMuiTheme} from "material-ui/styles";
import {Link} from "react-router-dom";
import {postRegisterData} from "../reducers/authentication/actions";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  accountText: {
    marginTop: theme.spacing.unit * 2,
    textAlign: "center"
  }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successRegister = data => {
    console.log(data);
    if (data.token) {
      this.props.history.push("/student-list");
    }
  }

  handleSubmit= values => {
    console.log(values);
    this.props.dispatch(postRegisterData(values, this.successRegister));
  }

  render () {
    const {classes, handleSubmit} = this.props;
    return (
      <React.Fragment>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
          Register
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                  name="userName"
                  component={TextField}
                  label="Username"
                  floatingLabelText="Username*"
                  fullWidth
                />
                <Field
                  name="email"
                  component={TextField}
                  label="Email Address"
                  floatingLabelText="Email Address*"
                  fullWidth
                />
                <Field
                  name="password"
                  component={TextField}
                  label="Password"
                  floatingLabelText="Password*"
                  fullWidth
                  type="password"
                />
                <Field
                  name="retypePassword"
                  component={TextField}
                  label="Re-type Password"
                  floatingLabelText="Re-type Password*"
                  fullWidth
                  type="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
            Register Now
                </Button>
                <div className={classes.accountText}>Already have an account?<Link to="/Login">Login</Link></div>

              </form>
            </Paper>

          </main>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

Register = reduxForm({
  form: "RegisterForm",
  validate
})(Register);

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.any
};

export default withStyles(styles)(Register);
