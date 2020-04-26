import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';

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
      
      <div style = {{marginTop: 10}}>
        <Container fixed>
        <div>
          <TextField
            label="Search for Items"
            value={this.state.term}
            onKeyUp={this.handleEnter}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
        </Container>
        <Container fixed>
        <div style = {{marginTop: 10}}>
        
       
          <Button
            onClick={this.handleSearch}
            color="primary"
            variant="contained">
            Submit
          </Button>
        </div>
        </Container>
      </div>
    
    );
  }
}

export default SearchBar;
