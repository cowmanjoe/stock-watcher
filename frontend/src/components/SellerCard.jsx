import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
export default class SellerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    let list = [];
    if (this.props.seller.inventory_reports) {
      this.props.seller.inventory_reports.forEach((report, i) => {
        list.push(<li key={i}>{report.product.name + ": " + report.level}</li>);
      });
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }

  render() {
    return (
      <Paper elevation={3} variant="outlined">
        <Link to={`/sellers/focus/${this.props.seller.id}`}>
          <div className="storeName"> Name: {this.props.seller.name}</div>
        </Link>
        <div className="address">Address: {this.props.seller.address}</div>
        <div className="city">City: {this.props.seller.city}</div>
        <div className="productList">Products: {this.renderProducts()}</div>
      </Paper>
    );
  }
}
