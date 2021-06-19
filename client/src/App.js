import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';


import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Student from './pages/Student/Student.component.jsx';
import Doctor from './pages/Doctor/Doctor.component.jsx';


// import MeetingPage from './pages/meetingPage/meetingPage.component.jsx';
import CourseStudent from './pages/StudentCoursePage/CourseStudent';
import CourseDoctor from './pages/DoctorCoursePage/CourseDoctor';
import Room from './pages/Room/Room';

class App extends Component {


  render(){
  return (
    <Router> 
      <Switch>
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
      
      <Route path='/meeting/live/:roomID' component={Room} render={props => <App {...props}/>}/>
      
      
    
    
    </Switch>
    </Router>

      
    );
  }
}

export default App;