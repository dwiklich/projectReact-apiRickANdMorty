export const graphQLRequestTotalPages = async () => {
  const requestPages = "https://rickandmortyapi.com/graphql";

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
};
