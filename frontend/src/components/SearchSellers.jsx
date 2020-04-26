import React from "react";
import SearchBar from "./SearchBar";
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
        <SearchBar getResults={this.handleResults} />
      </div>
    );
  }
}
