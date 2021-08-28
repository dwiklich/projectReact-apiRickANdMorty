export const loadCharacter = async (pagesCharacteres) => {
  let characters = [];

  const charactersUrlRequest =
    "https://rickandmortyapi.com/api/character/?page=";

  for (let i = 1; i <= pagesCharacteres; i++) {
    const charactersResponse = fetch(charactersUrlRequest + i);

    const [charactersConvert] = await Promise.all([charactersResponse]);

    let charactersAll = await charactersConvert.json();

    characters.push(...charactersAll.results);
  }
  return characters;
};
