import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Movies
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
