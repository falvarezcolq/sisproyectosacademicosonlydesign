// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'; 
import Login from './pages/Login';


function App() {
  return (
  <Router>  
    <Switch>
        <Route exact path="" component={Login}></Route>
    </Switch>
  </Router>    
  );
}

export default App;
