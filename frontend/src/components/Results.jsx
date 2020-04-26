import React from "react";
import SellerCard from "./SellerCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { geolocated } from "react-geolocated";
export default class Results extends React.Component {
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
      Nearby: "nearby",
      Alphabetical: "alphabetical",
    };

    this.renderSellers = this.renderSellers.bind(this);
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.search = this.search.bind(this);
  }

  async search(lat, lon) {
    let response;
    try {
      if (lat && lon) {
        response = await fetch(
          `http://localhost:8000/search/?product=${this.state.id}&lat=${lat}&lon=${lon}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        response = await fetch(
          `http://localhost:8000/search/?product=${this.state.id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      console.log(response);

      return response;
    } catch (err) {
      console.log(err);
      return {};
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
      response = await fetch(`http://localhost:8000/search/?product=${item}`, {
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
        products: seller.products,
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

  async handleSortByChange(sortByOption) {
    if (sortByOption == this.state.sortBy) {
      return;
    }

    this.setState({ sortBy: sortByOption });
    if (sortByOption == "nearby") {
      //uses cached data if it exists
      if (this.state.nearby.length != 0) {
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
              `http://localhost:8000/search/?product=${this.state.id}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
          } catch (err) {
            console.log(err);
            response = {};
          }

          let jsonResponse = await response.json();

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

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      var sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
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

    if (!list.length) {
      return null;
    }

    return <ul style={{ listStyleType: "none" }}>{list}</ul>;
  }
  render() {
    return (
      <div>
        <h1>{`Search Results for ${this.state.id}`}</h1>
        <ul>
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
