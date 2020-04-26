import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import BackButton from "./BackButton";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     
      <div style = {{marginTop: 30}}>
         <Container fixed>
        <BackButton />

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

        <div style = {{marginTop: 10}}>
          <Button
            to="sellers/report"
            component={Link}
            color="secondary"
            variant="contained">
            Report Inventory Item
          </Button>
        </div>
        

      </Container>
      </div>
    );
  }
}
