import { ApolloClient, InMemoryCache } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
});
