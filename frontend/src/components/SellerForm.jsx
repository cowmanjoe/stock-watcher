import React from "react";

export default class SellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stock: "",
      address: "",
    };
  }

  handleSubmit() {
    fetch(); //...
  }
  //TODO: add a post request here
  render() {
    const styles = {
      lable: {
        margin: "10px",
      },
    };
    return (
      <div style={{ margin: "15px" }}>
        <div>
          <label
            style={{
              margin: "10px",
            }}
            onChange={(event) => this.setState({ name: event.target.value })}>
            Name
          </label>
          <input name="name" class="form-control" type="text" value="" />
        </div>
        <div>
          <label
            style={{
              margin: "10px",
            }}
            onChange={(event) => this.setState({ stock: event.target.value })}>
            Stock Levels
          </label>
          <input type="radio" id="high" name="gender" value="high" />
          <label for="high">High</label>
          <input type="radio" id="medium" name="gender" value="medium" />
          <label for="medium">Medium</label>
          <input type="radio" id="low" name="gender" value="low" />
          <label for="low">Low</label>
          <input type="radio" id="out" name="gender" value="out" />
          <label for="low">Out of Stock</label>
        </div>
        <div>
          <label
            style={{
              margin: "10px",
            }}>
            Store Address
          </label>
          <input name="location" class="form-control" type="text" value="" />
        </div>
        <div
          style={{
            margin: "10px",
          }}>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
