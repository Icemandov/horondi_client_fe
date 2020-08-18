import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'unfetch';

export const REACT_APP_API_URL =
  window.env && window.env.REACT_APP_API_URL
    ? window.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  fetch
});

const getItems = async (query) => {
  const result = await client.query({
    query: gql`
      ${query}
    `
  });
  await client.resetStore();
  return result;
};

export const setItems = async (query, variables) => {
  const result = await client.mutate({
    mutation: gql`
      ${query}
    `,
    variables
  });
  await client.resetStore();
  return result;
};

export default getItems;
