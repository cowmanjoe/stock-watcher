import React from "react";
import SellerCard from "./SellerCard";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sellers: [],
      loading: true,
    };

    this.renderSellers = this.renderSellers.bind(this);
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    this.setState({ id: item });

    let sellers;
    let response;
    try {
      response = await fetch(`http://localhost:8000/search/?product=${item}`, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
      sellers = {
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

    let jsonResponse = await response.json();

    console.log(jsonResponse);
    if (!jsonResponse) {
      sellers = [];
    } else {
      sellers = jsonResponse.results.map((seller) => ({
        id: seller.id,
        name: seller.name,
        products: seller.products,
        address: seller.address,
        city: seller.city,
        latitude: seller.latitude,
        longitude: seller.longitude,
        inventory_reports: seller.inventory_reports,
      }));
    }

    console.log(response);

    this.setState({
      sellers: sellers,
      loading: false,
    });
  }

  renderSellers() {
    var list = [];

    if (this.state.sellers) {
      this.state.sellers.forEach((seller, i) => {
        list.push(
          <li key={i}>
            <SellerCard seller={seller} />
          </li>
        );
      });
    }

    console.log(list);

    if (!list.length) {
      return null;
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }
  render() {
    return (
      <div>
        <h1>{`Search Results for ${this.state.id}`}</h1>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          this.renderSellers() || "No results were found :("
        )}
      </div>
    );
  }
}
