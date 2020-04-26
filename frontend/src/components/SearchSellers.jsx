import React from "react";
import SearchBar from "./SearchBar";
import BackButton from "./BackButton";

export default class SellerSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(seller) {
    window.location += `/results/${seller}`;
  }

  render() {
    return (
      <div>
        <BackButton />
        <SearchBar getResults={this.handleResults} />
      </div>
    );
  }
}
