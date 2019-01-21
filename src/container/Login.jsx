import React from "react";
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
import {TextField, Checkbox} from "redux-form-material-ui";
import {MuiThemeProvider, getMuiTheme} from "material-ui/styles";
import {Link} from "react-router-dom";
import {postLoginData} from "../reducers/authentication/actions";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successLogin = data => {
    console.log(data);
    if (data.token) {
      this.props.history.push("/dashboard");
    }
  }

  handleSubmit= values => {
    console.log(values);
    this.props.dispatch(postLoginData(values, this.successLogin));
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
          Login
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                  name="email"
                  component={TextField}
                  label="Email"
                  floatingLabelText="Email*"
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
                <Field name="remember" component={Checkbox} label="remember me" LableText="Remember me"/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
            Login
                </Button>
                <div className={classes.accountText}>Already have an account?<Link to="/Register">Register</Link></div>
              </form>
            </Paper>
          </main>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

Login = reduxForm({
  form: "LoginForm",
  validate
})(Login);

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  history: PropTypes.any

};

export default withStyles(styles)(Login);
