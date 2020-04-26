import React from "react";
import Button from "@material-ui/core/Button";
import config from "../config";
import Container from '@material-ui/core/Container';
import BackButton from "./BackButton";

import TextField from "@material-ui/core/TextField";
export default class SellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      latitude: "",
      longitude: "",
      nameError: false,
      addressError: false,
      cityError: false,
      latError: false,
      longError: false,
    };
    this.submit = this.submit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submit() {
    if (!this.state.name) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }
    if (!this.state.address) {
      this.setState({ addressError: true });
    } else {
      this.setState({ addressError: false });
    }
    if (!this.state.city) {
      this.setState({ cityError: true });
    } else {
      this.setState({ cityError: false });
    }
    if (!this.state.latitude) {
      this.setState({ latError: true });
    } else {
      this.setState({ latError: false });
    }
    if (!this.state.longitude) {
      this.setState({ longError: true });
    } else {
      this.setState({ longError: false });
    }

    if (
      this.state.name &&
      this.state.address &&
      this.state.city &&
      this.state.latitude &&
      this.state.longitude
    ) {
      console.log("success");

      fetch(`${config.BACKEND_URL}/sellers/`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          inventory_reports: [],
        }),
      }).then((response) => response.json());
    }
  }

  handleSubmit(event) {
    if (event.key == "Enter") {
      this.submit();
    }
  }

  render() {
    return (
      <Container fixed>
      <div style = {{marginTop: 30}}>
      <div>
        <BackButton />

        <form noValidate autoComplete="off">
          <TextField
            label="Store Name"
            variant="outlined"
            onChange={(e) => this.setState({ name: e.target.value })}
            onKeyUp={this.handleSubmit}
            error={this.state.nameError}
          />
          <TextField
            label="Address"
            variant="outlined"
            onChange={(e) => this.setState({ address: e.target.value })}
            onKeyUp={this.handleSubmit}
            error={this.state.addressError}
          />
          <TextField
            label="City"
            variant="outlined"
            onKeyUp={this.handleSubmit}
            error={this.state.cityError}
            onChange={(e) => this.setState({ city: e.target.value })}
          />
          <TextField
            label="Latitude"
            variant="outlined"
            error={this.state.latError}
            type="number"
            onKeyUp={this.handleSubmit}
            onChange={(e) => this.setState({ latitude: e.target.value })}
          />
          <TextField
            label="Longitude"
            variant="outlined"
            type="number"
            onKeyUp={this.handleSubmit}
            error={this.state.longError}
            onChange={(e) => this.setState({ longitude: e.target.value })}
          />
        </form>

        <Button onClick={this.submit} color="primary" variant="contained" style={{marginTop: 10}}>
          Submit
        </Button>
      </div>
      </div>
      </Container>
    );
  }
}
