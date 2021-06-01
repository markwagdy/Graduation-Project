import React, { Component } from 'react';
import Hbar from './Hbar'
import SideSection from './SideSection'
import OldMeeting from './OldMeeting'
import JoinMeetButton from './JoinMeetButton'
import Scrollbars  from 'react-custom-scrollbars';
import './CourseStudentStyle.scss';


document.body.style.backgroundColor = "#0f5298";

class CourseStudent extends Component {
  render(){
  return ( 
    <div className="BWBoarder">
      <Hbar />
      <SideSection/>

      <Scrollbars style={{ height: 700 , width: 990}}>
      <OldMeeting/>
      <JoinMeetButton/>
      </Scrollbars>

    </div>

  );
}
}

export default CourseStudent;
