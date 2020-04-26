import React from "react";
import config from "../config";
import BackButton from "./BackButton";
import Box from "@material-ui/core/Box";
import { createStyles, withStyles } from "@material-ui/core";

class SellerFocus extends React.Component {
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
      response = await fetch(`${config.BACKEND_URL}/sellers/${id}/`, {
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
    let { classes } = this.props;

    if (this.state.seller.inventory_reports) {
      this.state.seller.inventory_reports.forEach((report, i) => {
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
      <Box className={classes.container}>
        <BackButton />

        <h1 className={classes.header}>
          {this.state.seller.name || "Seller not found"}
        </h1>
        <h2>
          {this.state.seller.address ? this.state.seller.address + "," : null}{" "}
          {this.state.seller.city || null}
        </h2>
        <div>{this.renderProducts()}</div>
      </Box>
    );
  }
}
const materialUiStyles = createStyles({
  container: {
    height: "100vh",
    justifyContent: "center",
    textAlign: "center",
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
});

export default withStyles(materialUiStyles)(SellerFocus);
