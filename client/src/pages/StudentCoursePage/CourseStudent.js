import React, { Component } from 'react';
import Hbar from './Hbar'
import SideSection from './SideSection'
import OldMeeting from './OldMeeting'
import JoinMeetButton from './JoinMeetButton'
import Scrollbars  from 'react-custom-scrollbars';
import './CourseStudentStyle.scss';


// document.body.style.backgroundColor = "#0f5298";

class CourseStudent extends Component {
  constructor(props){
    super(props);
    this.state={
    course:this.props.location.state.coursedata,
  }
    // this.handleCallback=this.handleCallback.bind(this);}
    // handleCallback = (childData) =>{
    //   this.setState({course: childData})
    //   console.log(this.state.course)
    } 
  render(){
  return ( 

    <div className="BlueBG">
      <div className="BWBoarder">
        <Hbar coursedata={this.state.course} role={this.props.location.state.user.role}/>
        <SideSection coursedata={this.state.course}/>

        <Scrollbars style={{ height: 700 , width: 990}}>
        <OldMeeting role={this.props.location.state.user.role} coursedata={this.state.course} meetingdata={this.state.meeting}/>
        <JoinMeetButton coursedata={this.state.course} />
        </Scrollbars>
      </div>
    </div>

  );
}
}

export default CourseStudent;
