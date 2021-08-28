import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Card } from "./components/Card";

const requestPages = "https://rickandmortyapi.com/graphql";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    this.loadCharacters();
  }

  async graphQLRequestPages() {
    const query = `query {
      characters(page: 1) {
        info {
          pages
        }
      }
    }`;

    const dataPromise = fetch(requestPages, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const [dataConvert] = await Promise.all([dataPromise]);
    const dataJson = await dataConvert.json();
    return dataJson.data.characters.info.pages;
  }

  async graphQLRequestPagesCHaractersAll() {
    const query = `query {
      characters(page: 1) {
        results {
          name
        }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
      }
    }`;

    const dataPromise = fetch(requestPages, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const [dataConvert] = await Promise.all([dataPromise]);
    const dataJson = await dataConvert.json();
    const pagesCharacteres = await dataJson.data.characters.info.pages;
    return pagesCharacteres;
  }

  loadCharacters = async () => {
    let characters = [];
    let pageNumber = 1;
    const pagesCharacteres = await this.graphQLRequestPages();
    console.log(pagesCharacteres);

    const charactersUrlRequest =
      "https://rickandmortyapi.com/api/character/?page=";

    for (let i = 1; i <= pagesCharacteres; i++) {
      const charactersResponse = fetch(charactersUrlRequest + i);

      const [charactersConvert] = await Promise.all([charactersResponse]);

      let charactersAll = await charactersConvert.json();

      characters.push(...charactersAll.results);
    }

    this.setState({
      characters: [...characters],
    });

    // }

    // zip de array
    // const postsAndPhotos = postsJson.map((post, index) => {
    //   return { ...post, cover: photosJson[index].url };
    // });
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
