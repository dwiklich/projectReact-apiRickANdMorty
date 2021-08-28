import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class CardPhoto extends Component {
  constructor(props) {
    super(props);
    this.props = [log];
  }

  state = {
    characters: [],
  };

  componentDidMount() {
    this.loadCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="photo-card">
        <img src={character.image} alt={character.name} className="photo" />
      </div>
    );
  }
}

export default App;
