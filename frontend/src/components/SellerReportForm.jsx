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
      value: "none",
      id: "",
      product_name: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <FormLabel>Inventory Report</FormLabel>
        <TextField label="Unique Seller ID" variant="outlined" />
        <TextField label="Product Name" variant="outlined" />
        <TextField label="Product Type" variant="outlined" />
        <FormLabel component="legend">Stock Level</FormLabel>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="levels"
            value={this.state.value}
            onChange={this.handleChange}>
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
