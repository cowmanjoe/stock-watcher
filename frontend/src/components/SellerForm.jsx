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
      latitude: 0.0,
      longitude: 0.0,
      inventory_reports: []
    }
  }

  handleSubmit() {

    fetch("http://localhost:8000/sellers/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        name: "yoo",
        address: "123 Smith Street",
        city: "Lower Cornelius",
        latitude: 69.0,
        longitude: 69.0,
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

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handleLatitudeChange(event) {
    this.setState({ latitude: event.target.value });
  }

  handleLongitudeChange(event) {
    this.setState({ longitude: event.target.value });
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField label="Store Name" variant="outlined" onChange={this.handleNameChange} />
        <TextField label="Address" variant="outlined"  onChange={this.handleAddressChange}/>
        <TextField label="City" variant="outlined"  onChange={this.handleCityChange}/>
        <TextField label="Latitude" variant="outlined"  onChange={this.handleLatitudeChange}/>
        <TextField label="Longitude" variant="outlined" onChange={this.handleLongitudeChange} />

        <Button color="secondary" variant="contained" onClick={this.handleSubmit}> Enter Seller </Button>
        
      </form>
      
    );
  }
}