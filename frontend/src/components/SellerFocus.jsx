import React from "react";

export default class SellerFocus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      seller: {},
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log("IDD: " + id);

    this.setState({ id: id });
    let seller;
    let response;
    try {
      response = await fetch(`http://localhost:8000/sellers/${id}/`, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
      seller = {
        name: "Error",
        products: [
          {
            name: "Error",
            stock: "Out of Stock",
          },
        ],
      };
    }

    console.log(response);
    let jsonResponse;

    if (response) {
      jsonResponse = await response.json();
    }

    console.log(jsonResponse);
    if (!jsonResponse) {
      seller = {};
    } else {
      seller = {
        name: jsonResponse.name,
        products: jsonResponse.products,
        address: jsonResponse.address,
        city: jsonResponse.city,
        latitude: jsonResponse.latitude,
        longitude: jsonResponse.longitude,
        inventory_reports: jsonResponse.inventory_reports,
      };
    }

    this.setState({
      seller: seller,
    });
  }

  renderProducts() {
    let list = [];

    if (this.state.seller.inventory_reports) {
      this.state.seller.inventory_reports.forEach((report, i) => {
        list.push(<li key={i}>{report.product.name + ": " + report.level}</li>);
      });
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }

  render() {
    return (
      <div>
        <h1>{this.state.seller.name || "Seller not found"}</h1>
        <h2>
          {this.state.seller.address ? this.state.seller.address + "," : null}{" "}
          {this.state.seller.city || null}
        </h2>
        <div>{this.renderProducts()}</div>
      </div>
    );
  }
}
