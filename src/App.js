import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/Home'
import BuyPage from './Pages/BuyIndividual'
import BuyDetailPage from './Pages/BuyIndividualDetail'
import SellPage from './Pages/Sell'
import Nav from './Components/Nav';
import Partner from './Pages/Partner'
import PartnerResult from './Pages/PartnerResult'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buy" component={BuyPage} />
          <Route exact path="/buy/:id" component={BuyDetailPage} />
          <Route exact path="/sell" component={SellPage} />
          <Route path="/partner" component={Partner} />
          <Route exact path="/partner-result" component={PartnerResult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
