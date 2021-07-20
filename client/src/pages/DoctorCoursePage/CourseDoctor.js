import React, { Component } from 'react';
import Hbar from './Hbar'
import SideSection from './SideSection'
import OldMeeting from './OldMeeting'
import CreateMeetButton from './CreateMeetButton'
import Scrollbars  from 'react-custom-scrollbars';
import './CourseDoctorStyle.scss';


// document.body.style.backgroundColor = "#0f5298";

class CourseDoctor extends Component {
  constructor(props){
  super(props);
  this.state={
  course:this.props.location.state.coursedata,
}
  this.handleCallback=this.handleCallback.bind(this);}
  handleCallback = (childData) =>{
    this.setState({course: childData})
    console.log(this.state.course)
  } 
  
  render(){
  return ( 
      <div className="BlueBG">
       <div className="BWBoarder">
      <Hbar coursedata={this.state.course} role={this.props.location.state.user.role}/>
      <SideSection/>

      <Scrollbars style={{ height: 700 , width: 990}}>
      <OldMeeting role={this.props.location.state.user.role} coursedata={this.state.course} meetingdata={this.state.meeting}/>
      <CreateMeetButton parentCallback={this.handleCallback} coursedata={this.state.course} user={this.props.location.state.user} history={this.props.history}/>

      </Scrollbars>

    </div>
    </div>
  );
}
}

export default CourseDoctor;
