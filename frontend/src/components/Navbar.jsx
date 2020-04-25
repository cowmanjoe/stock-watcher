import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newVal) {
    this.props.changeValue(newVal);
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={this.props.value}
            variant="fullWidth"
            onChange={this.handleChange}>
            <Tab label="Search By Item" />
            <Tab disabled label="Search By Store" />
            <Tab label="Sellers" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
