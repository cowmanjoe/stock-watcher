import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
   
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs
            // value={this.state.value}
            variant="fullWidth"
            onChange={this.handleChange}>
            <Tab
              label="Search By Item"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
              to="/"
              component={NavLink}
            />
            <Tab
              label="Search By Store"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/search_sellers"
              component={NavLink}
       
            />
            <Tab
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
