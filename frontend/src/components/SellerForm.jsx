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

    fetch("http://localhost:8000/sellers/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        name: "Big Aleen",
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
            }}>
            Name
          </label>
          <input
            name="name"
            type="text"
            value=""
            onChange={(event) => this.setState({ name: event.target.value })}
          />
        </div>
        <div>
          <label
            style={{
              margin: "10px",
            }}>
            Stock Levels
          </label>
          <input
            type="radio"
            id="high"
            name="stockLevel"
            value="high"
            onChange={(event) => this.setState({ stock: event.target.value })}
          />
          <label htmlFor="high">High</label>
          <input
            type="radio"
            id="medium"
            name="stockLevel"
            value="medium"
            onChange={(event) => this.setState({ stock: event.target.value })}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            id="low"
            name="stockLevel"
            value="low"
            onChange={(event) => this.setState({ stock: event.target.value })}
          />
          <label htmlFor="low">Low</label>
          <input
            type="radio"
            id="out"
            name="stockLevel"
            value="out"
            onChange={(event) => this.setState({ stock: event.target.value })}
          />
          <label htmlFor="low">Out of Stock</label>
        </div>
        <div>
          <label
            style={{
              margin: "10px",
            }}>
            Store Address
          </label>
          <input
            name="location"
            type="text"
            value=""
            onChange={(event) => this.setState({ address: event.target.value })}
          />
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
