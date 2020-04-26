import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import { withStyles, createStyles } from "@material-ui/core";

class SellerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    let list = [];
    let { classes } = this.props;

    if (this.props.seller.inventory_reports) {
      this.props.seller.inventory_reports.forEach((report, i) => {
        list.push(
          <li key={i} className={classes.item}>
            {report.product.name + ": "}{" "}
            <span
              className={
                report.level == "LOW" || report.level == "OUT_OF_STOCK"
                  ? classes.red
                  : report.level == "MEDIUM"
                  ? classes.orange
                  : classes.green
              }>
              {report.level == "OUT_OF_STOCK"
                ? "out of stock"
                : report.level.toLowerCase()}
            </span>
          </li>
        );
      });
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }

  render() {
    let { classes } = this.props;
    return (
      <Paper
        elevation={3}
        variant="outlined"
        className={classes.card}
        to={`/sellers/focus/${this.props.seller.id}`}>
        <Link
          className={classes.link}
          to={`/sellers/focus/${this.props.seller.id}`}>
          <div className={classes.name}> {this.props.seller.name}</div>

          <div className={classes.address}>
            {this.props.seller.address}, {this.props.seller.city}
          </div>
          <div className="productList">Products: {this.renderProducts()}</div>
        </Link>
      </Paper>
    );
  }
}

const materialUiStyles = createStyles({
  container: {
    height: "100vh",
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    padding: "10px",
    margin: "10px",
    borderColor: "black",
    width: "35vw",
    textAlign: "justify",
  },
  header: {
    fontSize: "80px",
  },
  item: {
    margin: "10px",
  },
  red: {
    color: "red",
  },
  orange: {
    color: "orange",
  },
  green: {
    color: "green",
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
    textDecoration: "none",
    textColor: "black",
    color: "inherit",
  },
  link: {
    textDecoration: "none",
    textColor: "black",
    color: "inherit",
  },
  address: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

export default withStyles(materialUiStyles)(SellerCard);
