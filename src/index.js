import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

import App from './App';

/*
 * Caution!!!  This is not a safe way to incorporate an authentication token
 * into your app.  The token will be readable by anyone who runs the code.
 * We're doing it this way for ease of demonstration only.
 */
const token = process.env.REACT_APP_NOT_SECRET_GITHUB_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${token}`
  },
  fetch: fetch,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
