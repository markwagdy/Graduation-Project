import React, { Component } from 'react';
import OldMeetCard from './OldMeetCard'

class OldMeeting extends Component {
  render(){
  return ( 
    <div class="grid-container">
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
          <div class="grid-item">
                <OldMeetCard/>
          </div>
    </div>

  );
}
}

export default OldMeeting;
