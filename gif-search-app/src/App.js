import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components//
import SearchBar from './Components/Searchbar/searchbar.js';

function App() {

  return (
    <div className="app-container">
      <SearchBar />
    </div>
  );
}

export default App;
