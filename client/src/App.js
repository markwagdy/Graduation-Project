import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';

import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router,Redirect,Route} from "react-router-dom";
import Meeting from './pages/Meeting/Meeting.component.jsx';
import Student from './pages/Student/Student.component.jsx';
import Doctor from './pages/Doctor/Doctor.component.jsx';

import CallPage from './pages/CallPage/CallPage.Component';
import MeetingPage from './pages/meetingPage/meetingPage.component.jsx';
import CourseStudent from './pages/StudentCoursePage/CourseStudent';
import CourseDoctor from './pages/DoctorCoursePage/CourseDoctor';

class App extends Component {


  render(){
  return (
    <Router> 
      <div>
      <Route exact path='/' component={HomePage}></Route>
      {/* <Route exact path='/meeting' component={Meeting}></Route> */}
      <Route exact path='/student' component={Student}></Route>
      <Route exact path='/doctor' component={Doctor}></Route> 
      <Route exact path='/doctor/course' component={CourseDoctor}></Route> 
      <Route exact path='/student/course' component={CourseStudent}></Route>

      {/* <Route exact path='/meeting' >
      <Redirect to={`/meeting/live/${uuidv4()}`}></Redirect>
      </Route> */}
      
      <Route exact path='/student' component={Student}></Route>  
      
      <Route path='/meeting/live/:room' component={MeetingPage} render={props => <App {...props}/>}/>
      
      
    
    
    </div>
    </Router>

      
    );
  }
}

export default App;