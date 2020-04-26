import React from "react";
import Button from "@material-ui/core/Button";
import SellerCard from "./SellerCard";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class SellerResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sellers: [],
      loading: true,
      sortBy: "alphabetical",
      geolocationAllowed: true,
      position: {},
      alphabetical: [],
      nearby: [],
    };
    this.sortByOptions = {
      Alphabetical: "alphabetical",
      Nearby: "nearby",
    };
    this.renderSellers = this.renderSellers.bind(this);
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  async handleSortByChange(sortByOption) {
    if (sortByOption == this.state.sortBy) {
      return;
    }

    this.setState({ sortBy: sortByOption });
    if (sortByOption == "nearby") {
      //uses cached data if it exists
      if (this.state.nearby.length != 0) {
        console.log("cached data");

        this.setState({ sellers: this.state.nearby });
        return;
      }
      //otherwise make a request
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          let sellers;
          let response;
          try {
            response = await fetch(
              `http://localhost:8000/sellers/?name=${this.state.id}&lat=${position.coords.latitude}&long=${position.coords.longitude}`,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
          } catch (err) {
            console.log(err);
            response = {};
          }

          let jsonResponse = await response.json();
          console.log("RESPONSE: ");

          console.log(jsonResponse);

          if (!jsonResponse) {
            sellers = [];
          } else {
            sellers = jsonResponse.results.map((seller) => ({
              id: seller.id,
              name: seller.name,
              address: seller.address,
              city: seller.city,
              latitude: seller.latitude,
              longitude: seller.longitude,
              inventory_reports: seller.inventory_reports,
            }));
          }
          console.log(sellers);
          this.setState({
            nearby: sellers,
            sellers: sellers,
          });
        },
        () => {
          this.setState({
            geolocationAllowed: false,
            sellers: this.state.alphabetical,
            sortBy: "alphabetical",
          });
          console.log("blocked");
        }
      );
    } else if (sortByOption == "alphabetical") {
      this.setState({ sellers: this.state.alphabetical });
    }
  }

  async componentDidMount() {
    //gets stores in alphabetical order on page load
    if ("geolocation" in navigator) {
      this.setState({ geolocationAllowed: true });
    } else {
      this.setState({ geolocationAllowed: false });
    }
    const { item } = this.props.match.params;
    this.setState({ id: item });

    let sellers;
    let response;
    try {
      response = await fetch(`http://localhost:8000/sellers/?name=${item}`, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }

    let jsonResponse = await response.json();

    if (!jsonResponse) {
      sellers = [];
    } else {
      sellers = jsonResponse.results.map((seller) => ({
        id: seller.id,
        name: seller.name,
        address: seller.address,
        city: seller.city,
        latitude: seller.latitude,
        longitude: seller.longitude,
        inventory_reports: seller.inventory_reports,
      }));
    }

    //caches results for when sortBy switches are done
    this.setState({
      alphabetical: sellers,
      sellers: sellers,
      loading: false,
    });
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      var sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <Button
          key={sortByOptionValue}
          style={{ border: "2px solid black", margin: "10px" }}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </Button>
      );
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

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }
  render() {
    let sortByLabel = <div>Sort By:</div>;
    return (
      <div>
        <h1>{`Search Results for ${this.state.id}`}</h1>
        <ul
          style={{
            listStyleType: "none",
            padding: "10px",
          }}>
          {this.state.sellers.length == 0 ? null : sortByLabel}
          {this.state.sellers.length == 0 ? null : this.renderSortByOptions()}
        </ul>
        {this.state.loading ? (
          <CircularProgress />
        ) : (
          this.renderSellers() || "No results were found :("
        )}
      </div>
    );
  }
}
