import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
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
            value={this.state.value}
            variant="fullWidth"
            onChange={this.handleChange}>
            <Tab value={1} label="Search By Item" />
            <Tab value={2} disabled label="Search By Store" />
            <Tab value={3} label="Sellers" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
