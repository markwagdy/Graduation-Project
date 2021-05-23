import React, { Component } from 'react';
import Hbar from './Hbar'
import SideSection from './SideSection'
import OldMeeting from './OldMeeting'
import CreateMeetButton from './CreateMeetButton'
import Scrollbars  from 'react-custom-scrollbars';

document.body.style.backgroundColor = "#0f5298";

class CourseDoctor extends Component {
  render(){
  return ( 
    <div className="BWBoarder">
      <Hbar />
      <SideSection/>

      <Scrollbars style={{ height: 700 , width: 990}}>
      <OldMeeting/>
      <CreateMeetButton/>
      </Scrollbars>

    </div>

  );
}
}

export default CourseDoctor;
