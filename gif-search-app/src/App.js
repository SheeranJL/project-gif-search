import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components//
import MainPage from './Components/Mainpage/main-page.js';
import SavedPage from './Components/Saved/saved.js';
import SearchBar from './Components/Searchbar/searchbar.js';

function App() {

  return (
    <div className="app-container">
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/saved' component={SavedPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
