import React from "react";
import SearchBar from "./SearchBar";
import BackButton from "./BackButton";
import Container from '@material-ui/core/Container';

export default class SearchItems extends React.Component {
  constructor(props) {
    super(props);

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(item) {
    window.location += `/results/${item}`;
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
