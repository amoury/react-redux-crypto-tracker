import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import CurrencyList from './containers/CurrencyList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <CurrencyList />
      </div>
    );
  }
}

export default App;
