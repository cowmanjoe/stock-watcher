import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
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
            <Tab value={1} label="Search By Item" to="/" component={Link} />
            <Tab value={2} disabled label="Search By Store" />
            <Tab value={3} label="Sellers" to="/sellers" component={Link} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
