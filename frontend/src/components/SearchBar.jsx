import React from "react";

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
    console.log("Searching for " + this.state.term);
    this.props.getResults(this.state.term);
    this.state.term = "";
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
            placeholder="Search For Items"
            style={{ margin: "10px" }}
            onKeyUp={this.handleEnter}
            onChange={this.handleTermChange}
          />
        </div>
        <div>
          <a
            onClick={this.handleSearch}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              marginTop: "150px",
              margin: "15px",
              padding: "10px",
            }}>
            Search
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
