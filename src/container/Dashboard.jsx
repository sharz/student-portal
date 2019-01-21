import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import BarChart from "../component/BarChart";
import PieChart from "../component/PieChart";

const styles = {
  ChartArea: {
    marginTop: "20px"
  }
};

class Dashboard extends React.Component {
  render () {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Grid container direction="row"
          justify="center"
          alignItems="center"
        >
          <h1>Welcome to Student Dashboard</h1>
        </Grid>
        <div className={classes.ChartArea}>
          <Grid container>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <PieChart />
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
              <BarChart />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired

};
export default withStyles(styles)(Dashboard);
