import React from "react";
import PropTypes from "prop-types";
import {updateSingleStudent} from "../reducers/studentAction/actions";
import {connect} from "react-redux";
// import validate from "../component/Validate";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


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

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      first_name: "",
      last_name: "",
      id: 0
    };
  }

  componentDidMount = () => {
    this.setState({
      first_name: this.props.student.first_name,
      last_name: this.props.student.last_name,
      avatar: this.props.student.avatar,
      id: this.props.student.id
    });
    // this.props.dispatch(updateSingleStudent(this.state.id, this.singleStudentData));
  }

  singleStudentData = student => {
    if (student) {
      this.setState({
        first_name: student.data.first_name,
        last_name: student.data.last_name,
        avatar: student.data.avatar

      });
    }
  };

  handlefirstNameChange = e => {
    this.setState({first_name: e.target.value});
  };

  handleLastNameChange = e => {
    this.setState({last_name: e.target.value});
  }
  updatedStudentData = data => {
    if (data) {
      this.props.closeModal();
    }
  }

   updateStudent = () => {
     console.log(this.state);
     this.props.dispatch(updateSingleStudent(this.state, this.updatedStudentData));
   }
   render() {
     const {classes} = this.props;
     console.log(this.props);
     return (
       <React.Fragment>
         <h3>Edit Student Details</h3>
         <form className={classes.form}>
           <Grid container>
             <Grid item lg={12} md={12}>
               <TextField
                 id="standard-name"
                 label="First Name"
                 color="primary"
                 value={this.state.first_name}
                 onChange={e => this.handlefirstNameChange(e)}
                 margin="normal"
                 fullWidth
               />
             </Grid>
           </Grid>
           <Grid container className={classes.grid}>
             <Grid item lg={12} md={12}>
               <TextField
                 id="standard-name"
                 label="Last Name"
                 color="primary"
                 value={this.state.last_name}
                 onChange={e => this.handleLastNameChange(e)}
                 margin="normal"
                 fullWidth
               />
             </Grid>
           </Grid>
           <div>
             <Button
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               onClick={this.updateStudent}
             >Update
             </Button>
           </div>
         </form>
       </React.Fragment>
     );
   }
}

EditStudent.propTypes = {
  student: PropTypes.object,
  dispatch: PropTypes.func,
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  history: PropTypes.any,
  closeModal: PropTypes.func
};

const mapStateToProps = state => ({
  singleStudentData: state.singleStudentData
});

export default connect(mapStateToProps, null)(withStyles(styles)(EditStudent));
