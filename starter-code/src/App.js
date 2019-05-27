import React, { Component } from 'react';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetail';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-primary">
          <span>Wiki ountries</span>
        </nav>
        <div className="CountryList">

        </div>
        <Switch>
          <Route exact path="/country/:id" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
