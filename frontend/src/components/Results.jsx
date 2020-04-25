import React from "react";
import { useParams } from "react-router-dom";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  componentDidMount() {
    const { item } = this.props.match.params;
    this.setState({ id: item });
    //get request for the items
  }
  render() {
    return (
      <div>
        <h1>{`Searching for ${this.state.id}`}</h1>
        <p>Result # 1</p>
        <p>Result # 2</p>
        <p>Result # 3</p>
        <p>Result # ...</p>
        <p>Result # N</p>
      </div>
    );
  }
}
