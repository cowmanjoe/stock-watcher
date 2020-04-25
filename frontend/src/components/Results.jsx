import React from "react";
import { useParams } from "react-router-dom";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sellers: [],
    };

    this.renderSellerCards = this.renderSellerCards.bind(this);
  }

  componentDidUpdate() {
    const { item } = this.props.match.params;
    this.setState({ id: item });
    console.log("hello fetching");

    fetch('http://localhost:8000/sellers/')
        .then((response) => response.json())
        .then(jsonResponse => {
          console.log(jsonResponse);
          this.setState({sellers: jsonResponse.results});
        });
    
  }

  renderSellerCards() {
    let list = [];
    for (let i = 0; i < this.state.sellers.length; i++) {
      list.push(<li>sellers[i].name</li>)
    }
    return <ul>{this.list}</ul>;
  }


  render() {
    return (
      <div>
        <h1>{`Searching for ${this.state.id}`}</h1>
          {this.renderSellerCards()}
      </div>
    );
  }
}
