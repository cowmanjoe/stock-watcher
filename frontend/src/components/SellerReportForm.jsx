import React from "react";

import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

export default class SellerReportForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      id: "",
      product_name: "",
      product_type: "",
      idError: false,
      nameError: false,
      typeError: false,
      stockError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    if (event.key == "Enter") {
      if (!this.state.id) {
        this.setState({ idError: true });
      } else {
        this.setState({ idError: false });
      }
      if (!this.state.product_name) {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
      if (!this.state.product_type) {
        this.setState({ typeError: true });
      } else {
        this.setState({ typeError: false });
      }
      if (this.state.value == "") {
        this.setState({ stockError: true });
      } else {
        this.setState({ stockError: false });
      }

      if (
        this.state.id &&
        this.state.product_name &&
        this.state.product_type &&
        this.state.value
      ) {
        console.log("success");

        fetch("http://localhost:8000/sellers/", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
      
            body: JSON.stringify({
              value: this.state.name,
              id: this.state.address,
              product_name: this.state.city,
              product_type: this.state.latitude,
            })
            
          }).then(response => response.json())
      }
    }
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <FormLabel>Inventory Report</FormLabel>
        <TextField
          label="Unique Seller ID"
          variant="outlined"
          onChange={(e) => this.setState({ id: e.target.value })}
          onKeyUp={this.handleSubmit}
          error={this.state.idError}
        />
        <TextField
          label="Product Name"
          variant="outlined"
          onChange={(e) => this.setState({ product_name: e.target.value })}
          onKeyUp={this.handleSubmit}
          error={this.state.nameError}
        />
        <TextField
          label="Product Type"
          variant="outlined"
          onChange={(e) => this.setState({ product_type: e.target.value })}
          onKeyUp={this.handleSubmit}
          error={this.state.typeError}
        />
        <FormLabel component="legend">Stock Level</FormLabel>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="levels"
            value={this.state.value}
            error={this.state.stockError}
            onChange={this.handleChange}
            onKeyUp={this.handleSubmit}>
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
            <FormControlLabel
              value="Out of Stock"
              control={<Radio />}
              label="Out of Stock"
            />
          </RadioGroup>
        </FormControl>
      </form>
    );
  }
}
