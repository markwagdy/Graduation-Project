// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const api=require('./api/index')
class App extends React.Component {

 

  render(){
  return (
    <Router> 
      <div>
      <Route exact path='/' component={HomePage}></Route>
     

      </div>
    </Router>

      
      
    );
  }
}

export default App;
