import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload(true);
    // this.props.history.push("/login");
  };

  render () {
    const {classes} = this.props;
    console.log(this.props);

    return (
      <React.Fragment>
        <AppBar osition="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            Student Portal
            </Typography>
            {this.props.user.isAuthenticated === true ? <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
              :
              <div>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/Register">Register</Button>
              </div>
            }
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

CustomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  history: PropTypes.any
};

const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, null)(withStyles(styles)(CustomNavBar));
