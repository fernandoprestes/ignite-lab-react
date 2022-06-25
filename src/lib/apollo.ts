import { ApolloClient, InMemoryCache } from '@apollo/client';

const urlApi = import.meta.env.VITE_APP_GRAPH_API_URL;
const token = import.meta.env.VITE_APP_GRAPH_ACCESS_TOKEN;

export const client = new ApolloClient({
  uri: urlApi,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  cache: new InMemoryCache(),
});
