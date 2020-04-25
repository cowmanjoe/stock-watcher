import React from "react";

import TextField from "@material-ui/core/TextField";
export default class SellerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField label="Store Name" variant="outlined" />
        <TextField label="Address" variant="outlined" />
        <TextField label="City" variant="outlined" />
        <TextField label="Latitude" variant="outlined" />
        <TextField label="Longitude" variant="outlined" />
      </form>
    );
  }
}
