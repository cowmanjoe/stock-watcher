import React from "react";
import Button from "@material-ui/core/Button";

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (event.key == "Enter") {
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

          fetch("http://localhost:8000/sellers/", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
      
            body: JSON.stringify({
              name: this.state.name,
              address: this.state.address,
              city: this.state.city,
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              inventory_reports: [
                  {
                      "level": "low",
                      "product": {
                          "name": "Charmin Ultra",
                          "product_type": "Toilet Paper"
                      },
                      "timestamp": "2020-04-25T12:59:04.331697Z"
                  }
              ]
            })
          }).then(response => response.json())
         

      }
    }
  }

  render() {
    return (
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
      
    );
  }
}