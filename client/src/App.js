import './App.css';
import React, { Component } from 'react';
import HomePage from './pages/Homepage/Homepage.component';


import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Student from './pages/Student/Student.component.jsx';
import Doctor from './pages/Doctor/Doctor.component.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

// import MeetingPage from './pages/meetingPage/meetingPage.component.jsx';
import CourseStudent from './pages/StudentCoursePage/CourseStudent';
import CourseDoctor from './pages/DoctorCoursePage/CourseDoctor';

class App extends Component {


  render(){
  return (
    <Router> 
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      {/* <Route exact path='/meeting' component={Meeting}></Route> */}
      <PrivateRoute exact path="/student" component={props => <Student {...props}/>} />
      <PrivateRoute exact path="/doctor"  component={props => <Doctor {...props}/>} />
      <PrivateRoute exact path="/doctor/course" component={props => <CourseDoctor {...props}/>} />
      <PrivateRoute exact path="/student/course" component={props => <CourseStudent {...props}/>} />
      {/* <PrivateRoute exact path='/student'  component={Student}></PrivateRoute> */}
      {/* <PrivateRoute exact path='/doctor' component={Doctor}></PrivateRoute> 
      <PrivateRoute exact path='/doctor/course' component={CourseDoctor}></PrivateRoute> 
      <PrivateRoute exact path='/student/course' component={CourseStudent}></PrivateRoute> */}

      {/* <Route exact path='/meeting' >
      <Redirect to={`/meeting/live/${uuidv4()}`}></Redirect>
      </Route> */}
      
      <PrivateRoute exact path='/student' component={Student}></PrivateRoute>  
      
    
    
    </Switch>
    </Router>

      
    );
  }
}

export default App;