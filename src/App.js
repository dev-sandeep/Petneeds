import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/Home'
import BuyPage from './Pages/BuyIndividual'
import SellPage from './Pages/Sell'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buy" component={BuyPage} />
          <Route exact path="/sell" component={SellPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
