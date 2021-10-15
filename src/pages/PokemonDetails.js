import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(`${POKEMON_API_URL}/${id}`).then((res) => {
      console.log(res.data);
      if (res.status >= 200 && res.status < 300) {
        this.setState({ pokemon: res.data });
      }
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ marginTop: 100 }}>Details</h1>
      </div>
    );
  }
}
