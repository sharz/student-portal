import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PersonAdd from "@material-ui/icons/PersonAdd";
import {getAllStudentList, deleteStudent} from "../reducers/studentAction/actions";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import CustomModal from "../component/customModal";
import EditStudent from "./EditStudent";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const styles = theme => ({
  appRoot: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  root: {
    width: "100%",
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 20
  }
});

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      show: false,
      studentId: null,
      open: false
    };
  }

  gotAllStudentList = studentList => {
    this.setState({studentList: studentList.data});
  }
  deletedStudent = data => {
    console.log(data);
    this.setState({open: true});
  }
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({open: false});
  };

  deleteStudent = id => {
    this.props.dispatch(deleteStudent(id, this.deletedStudent));
  }

  componentWillReceiveProps = nextProps => {
    console.log(nextProps);
    this.setState({studentList: nextProps.studentList});
  }

  editStudentDetails = student => {
    console.log(student);
    this.setState({show: true, student: student});
  };

  hideModal = () => {
    this.setState({show: false});
  }

  componentDidMount = () => {
    if (this.props.studentList.length > 0) {
      this.setState({studentList: this.props.studentList});
    } else {
      this.props.dispatch(getAllStudentList(this.gotAllStudentList));
    }
  }

  render () {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <div className={classes.approot}>
                <AppBar position="static" color="default">
                  <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                      {this.state.studentList.length} Total Students
                    </Typography>
                    <IconButton aria-label="Add" component={Link} to="/create-user">
                      <PersonAdd styles={{fontSize: 30}} />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </div>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">First Name</TableCell>
                    <TableCell align="center">Last Name</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Created</TableCell>
                    <TableCell align="center">Updated</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.studentList.map(student => (
                    <TableRow key={student.id}>
                      <TableCell component="th" scope="student">
                        {student.id}
                      </TableCell>
                      <TableCell align="center">{student.first_name}</TableCell>
                      <TableCell align="center">{student.last_name}</TableCell>
                      <TableCell align="center">
                        <Avatar alt="Remy Sharp" src={student.avatar} className={classes.avatar} />
                      </TableCell>
                      <TableCell align="center">{student.createdAt ? new Date(student.createdAt).toLocaleDateString() : "--" }</TableCell>
                      <TableCell align="center">{student.updatedAt ? new Date(student.updatedAt).toLocaleDateString() : "--"}</TableCell>

                      <TableCell align="center">
                        <IconButton aria-label="Delete">
                          <DeleteIcon className={classes.icon} onClick={() => this.deleteStudent(student.id)}/>
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={() => this.editStudentDetails(student)}>
                          <EditIcon className={classes.icon}/>
                        </IconButton>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Student Deleted!!</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        {this.state.show ?
          <CustomModal isOpen={this.state.show} onClose={() => this.hideModal()}>
            <EditStudent
              student={this.state.student}
              closeModal={this.hideModal}
            />
          </CustomModal> :
          null
        }
      </React.Fragment>
    );
  }
}

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  studentList: PropTypes.object
};


const mapStateToProps = state => ({
  studentList: state.studentList
});

export default connect(mapStateToProps, null)(withStyles(styles)(StudentList));
