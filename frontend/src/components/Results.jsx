import React from "react";
import { useParams } from "react-router-dom";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sellers: [],
    };
  }

  componentDidMount() {
    const { item } = this.props.match.params;
    this.setState({ id: item });

    this.setState({
      sellers: fetch('localhost:8000/sellers')
        .then((response) => {
          response.json();
        }).then(jsonResponse => {
          return jsonResponse.results;
        })
    });

  }
  render() {
    return (
      <div>
        <h1>{`Searching for ${this.state.id}`}</h1>
        {this.state.sellers.forEach((seller) => <div>{seller.name}</div>)}
      </div>
    );
  }
}
