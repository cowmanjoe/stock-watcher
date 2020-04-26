import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSearch(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.state.term) {
      console.log("Searching for " + this.state.term);
      this.props.getResults(this.state.term);
      this.setState({ term: "" });
    }
  }

  handleEnter(event) {
    event.preventDefault();
    if (event.key == "Enter") {
      this.handleSearch();
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            placeholder="Enter Search Here"
            style={{ margin: "10px" }}
            onKeyUp={this.handleEnter}
            onChange={this.handleTermChange}
          />
        </div>
        <div>
          <Button
            onClick={this.handleSearch}
            color="primary"
            variant="contained">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
