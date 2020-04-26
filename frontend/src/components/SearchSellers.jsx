import React from "react";
import SearchBar from "./SearchBar";
import BackButton from "./BackButton";
import { Container } from "@material-ui/core";

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
        <Container fixed>
        <BackButton />
        <SearchBar getResults={this.handleResults} />
        </Container>
      </div>
      
    );
  }
}
