import React, { Component } from 'react';
import Hbar from './Hbar'
import SideSection from './SideSection'
import OldMeeting from './OldMeeting'
import CreateMeetButton from './CreateMeetButton'
import Scrollbars  from 'react-custom-scrollbars';
import './CourseDoctorStyle.scss';


// document.body.style.backgroundColor = "#0f5298";

class CourseDoctor extends Component {
  render(){
  return ( 
      <div className="BlueBG">
       <div className="BWBoarder">
      <Hbar />
      <SideSection/>

      <Scrollbars style={{ height: 700 , width: 990}}>
      <OldMeeting/>
      <CreateMeetButton history={this.props.history}/>

      </Scrollbars>

    </div>
    </div>
  );
}
}

export default CourseDoctor;
