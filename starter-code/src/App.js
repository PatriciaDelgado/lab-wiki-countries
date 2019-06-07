import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetail';


class App extends  Component {
  state = {
    countries: countries
  }
  render() {
    const list = countries.map((country, i) => 
    <Link key={i} className="list-group-item list-group-item-action active">
      {/* <span role="img" key={i}>{country.flag}</span> */}
      {country.name.official}
    </Link>)

    return (
      <div className="App">
        <nav className="navbar navbar-light bg-primary">
          <span>Wiki ountries</span>
        </nav>
        <div className="CountryList">
          <div class="row">
            <div class="col-5">
              <div class="list-group">
                {list}
              </div>
              </div>
            <div class="col-7">Column 7/12</div>
          </div>
        </div>
        <Switch>
          <Route exact path="/country/:id" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
