import React from "react";
import SellerCard from "./SellerCard";
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sellers: {},
    };

    this.renderSellers = this.renderSellers.bind(this);
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    this.setState({ id: item });

    let response = await fetch("http://localhost:8000/sellers/", {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.results.map((seller) => {
          return {
            name: seller.name,
            address: seller.address,
            city: seller.address,
          };
        });
      })
      .catch((error) => {
        console.log(error);
        return {
          name: "Error",
          products: [
            {
              name: "Error",
              stock: "Out of Stock",
            },
          ],
        };
      });
    this.setState({
      sellers: response,
    });
  }

  renderSellers() {
    var list = [];

    if (this.state.sellers) {
      Object.keys(this.state.sellers).forEach((seller, i) => {
        list.push(
          <li key={i}>
            <SellerCard name={seller.name} products={seller.products} />
          </li>
        );
      });
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }
  render() {
    return (
      <div>
        <h1>{`Searching for ${this.state.id}`}</h1>
        {this.renderSellers()}
      </div>
    );
  }
}
