import React from "react";
import Paper from "@material-ui/core/Paper";
export default class SellerCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    let list = [];
    if (this.props.products) {
      this.props.products.forEach((product, i) => {
        list.push(<li key={i}>{product.name + ": " + product.stock}</li>);
      });
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }

  render() {
    return (
      <Paper elevation={3} variant="outlined">
        <div className="storeName">{this.props.name}</div>
        <div className="productList">{this.renderProducts()}</div>
      </Paper>
    );
  }
}
