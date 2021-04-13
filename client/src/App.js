// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';
// import Student from './pages/Student/Student.component';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Meeting from './pages/Meeting/Meeting.component.jsx';

const api=require('./api/index')
class App extends Component {

 

  render(){
  return (
    <Router> 
      <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/meeting' component={Meeting}></Route>


    <HomePage>
    </HomePage>
    
    {/* <Student></Student> */}

    </div>
      
      </div>
    </Router>

      
    );
  }
}

export default App;
