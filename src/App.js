import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/Home'
import BuyPage from './Pages/BuyIndividual'
import BuyDetailPage from './Pages/BuyIndividualDetail'
import SellPage from './Pages/Sell'
import Nav from './Components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buy" component={BuyPage} />
          <Route exact path="/buy/:id" component={BuyDetailPage} />
          <Route exact path="/sell" component={SellPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
