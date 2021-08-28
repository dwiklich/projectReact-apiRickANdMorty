import "./App.css";
import { Component } from "react";
import { Card } from "./components/Card";
import { loadCharacter } from "./utils/loadCharacters";
import { graphQLRequestTotalPages } from "./utils/graphQLRequestTotalPages";

class App extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    await this.loadCharacters();
  }

  // async graphQLRequestPagesCHaractersAll() {
  //   const query = `query {
  //     characters(page: 1) {
  //       results {
  //         name
  //       }
  //       }
  //       location(id: 1) {
  //         id
  //       }
  //       episodesByIds(ids: [1, 2]) {
  //         id
  //       }
  //     }
  //   }`;

  //   const dataPromise = fetch(requestPages, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       query,
  //     }),
  //   });

  //   const [dataConvert] = await Promise.all([dataPromise]);
  //   const dataJson = await dataConvert.json();
  //   const pagesCharacteres = await dataJson.data.characters.info.pages;
  //   return pagesCharacteres;
  // }

  loadCharacters = async () => {
    const totalPagesCharacteres = await graphQLRequestTotalPages();

    const characters = await loadCharacter(totalPagesCharacteres);
    this.setState({
      characters: [...characters],
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <section className="container">
        <div className="cards">
          {characters.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
