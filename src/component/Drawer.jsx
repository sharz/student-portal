import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SvgIcon from "@material-ui/core/SvgIcon";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleIcon from "@material-ui/icons/People";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class CustomDrawer extends React.Component {
    state = {
      mobileOpen: false
    };

    handleDrawerToggle = () => {
      this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    render () {
      const {classes} = this.props;
      return (
        <React.Fragment>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
            anchor="left"
          >
            <Divider />
            <div><p>Sharvari</p></div>
            <Divider />
            <List>
              <ListItem button component={Link} to="/dashboard">
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
            <List>
              <ListItem button component={Link} to="/student-list" >
                <ListItemIcon>
                  <PeopleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="User List" />
              </ListItem>
            </List>
            <List>
              <ListItem button component={Link} to="/create-user" >
                <ListItemIcon>
                  <PersonAddIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Create User"/>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </React.Fragment>
      );
    }
}

CustomDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomDrawer);

