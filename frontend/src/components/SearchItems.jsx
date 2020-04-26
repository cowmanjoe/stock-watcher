import React from "react";
import SearchBar from "./SearchBar";
export default class SearchItems extends React.Component {
  constructor(props) {
    super(props);

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(item) {
    window.location += `/${item}`;
  }
  render() {
    return (
      <div>
        <SearchBar getResults={this.handleResults} />
      </div>
    );
  }
}
