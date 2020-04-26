import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createStyles, withStyles } from "@material-ui/core/styles";
import ColorTheme from "../styles/colorTheme";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            onChange={this.handleChange}
            className={classes.bar}>
            <Tab
              className={classes.tab}
              label="Home"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
              to="/"
              component={NavLink}
            />
            <Tab
              className={classes.tab}
              label="Search By Item"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/search_items"
              component={NavLink}
            />
            <Tab
              label="Search By Store"
              className={classes.tab}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/search_sellers"
              component={NavLink}
            />
            <Tab
              className={classes.tab}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              label="Sellers"
              to="/sellers"
              component={NavLink}
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

const materialUiStyles = createStyles({
  bar: {
    height: "50px",
    backgroundColor: ColorTheme.darkBlue,
  },
  tab: {
    color: ColorTheme.white,
    fontSize: "20px",
    border: "1px solid black",
  },
});

export default withStyles(materialUiStyles)(Navbar);
