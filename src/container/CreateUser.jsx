import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {reduxForm, Field} from "redux-form";
import validate from "../component/Validate";
import {TextField} from "redux-form-material-ui";
import {MuiThemeProvider, getMuiTheme} from "material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import {postCreateStudent} from "../reducers/studentAction/actions";

const styles = theme => ({
  root: {
    width: "50%",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  backButton: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  next: {
    marginTop: theme.spacing.unit * 3
  }
});

const getSteps = () => ["Personal Details", "Address Details", "Final Step"];

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (<div>
          <form>
            <Field
              name="first_name"
              component={TextField}
              label="First Name"
              floatingLabelText="First Name*"
              fullWidth
            />
            <Field
              name="last_name"
              component={TextField}
              label="Last Name"
              floatingLabelText="Last Name*"
              fullWidth
            />
            <Field
              name="contact"
              component={TextField}
              label="Contact Number"
              floatingLabelText="Contact Number*"
              fullWidth
            />
            <Field
              name="rollName"
              component={TextField}
              label="Roll Number"
              floatingLabelText="Roll Number*"
              fullWidth
            />
          </form>
        </div>);
      case 1:
        return (<div>
          <form>
            <Field
              name="Line"
              component={TextField}
              label="Line 1"
              floatingLabelText="Line 1*"
              fullWidth
            />
            <Field
              name="Line 2"
              component={TextField}
              label="Line 2"
              floatingLabelText="Line 2*"
              fullWidth
            />
            <Field
              name="City"
              component={TextField}
              label="City"
              floatingLabelText="City*"
              fullWidth
            />
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Field
                  name="State"
                  component={TextField}
                  label="State"
                  floatingLabelText="State*"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Field
                  name="PinCode"
                  component={TextField}
                  label="Pin Code"
                  floatingLabelText="Pin Code*"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Field
              name="Country"
              component={TextField}
              label="Country"
              floatingLabelText="Country*"
              fullWidth
            />
          </form>
        </div>);
      case 2:
        return (<div style={{textAlign: "center"}}><h4>Congratulations Student Information added successfully</h4></div>);
      default:
        return "Unknown stepIndex";
    }
  };
  successCreateStudent = createdUser => {
    console.log(createdUser);
  }
  handleSubmit= values => {
    console.log(values);
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
    console.log(this.state.activeStep);
    if (this.state.activeStep >= 1) {
      this.props.dispatch(postCreateStudent(values, this.successCreateStudent));
    }
  }

      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1
        }));
      };

      handleReset = () => {
        this.setState({
          activeStep: 0
        });
      };

      redirect = () => {
        this.props.history.push("/student-list");
      };

      render() {
        const {classes, handleSubmit} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Divider />
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>All steps completed</Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div className={classes.paper}>
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                    {this.getStepContent(activeStep)}
                  </MuiThemeProvider>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    {activeStep === steps.length - 1 ?
                      <Button variant="contained" color="primary" onClick={this.redirect} className={classes.next}>
                      Finish
                      </Button> :
                      <Button variant="contained" color="primary" onClick={handleSubmit(this.handleSubmit)} className={classes.next}>
                        Next
                      </Button> }
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
}

CreateUser.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  history: PropTypes.any
};

CreateUser = reduxForm({
  form: "CreateUserForm",
  validate
})(CreateUser);

export default withStyles(styles)(CreateUser);
