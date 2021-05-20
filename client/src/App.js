// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Meeting from './pages/Meeting/Meeting.component.jsx';
import Student from './pages/Student/Student.component.jsx';
import Doctor from './pages/Doctor/Doctor.component.jsx';


const api=require('./api/index')
class App extends Component {

 

  render(){
  return (
    <Router> 
      <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/meeting' component={Meeting}></Route>
      <Route exact path='/student' component={Student}></Route>
      <Route exact path='/doctor' component={Doctor}></Route>  
      

    
    
    </div>
    </Router>

      
    );
  }
}

export default App;
