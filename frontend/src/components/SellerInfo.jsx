import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <Button
            to="sellers/new"
            component={Link}
            color="primary"
            variant="contained">
            Register as Seller
          </Button>
        </div>

        <div>
          <Button
            to="sellers/report"
            component={Link}
            color="secondary"
            variant="contained">
            Report Inventory Item
          </Button>
        </div>
      </div>
    );
  }
}
