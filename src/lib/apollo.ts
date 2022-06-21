import { ApolloClient, InMemoryCache } from "@apollo/client";

const urlApi = import.meta.env.VITE_APP_GRAPH_API_URL;

export const client = new ApolloClient({
  uri: urlApi,
  cache: new InMemoryCache()
})
