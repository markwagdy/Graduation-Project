import React, { Component } from 'react';
import ReportButton from './ReportButton'
import MeetingAnalButton from './MeetingAnalButton'

class OldMeetCard extends Component {
  render(){
  return ( 
    <div>
        <div className="OldMeetCard">
             
            <MeetingAnalButton/>
             <ReportButton/>

             
             <h1 style={{display: "inline-block",  fontSize: "30px"}}>Lecture X, Name</h1>
             <h5 style={{display: "inline-block", paddingLeft:"50px"}} >Finished</h5>

             <div class="grid-container grid-in-card">
                    <div class="grid-item grid-item-in-card">
                        <p> Created By </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> DATA </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> On </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> DATA </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> Duration (H:M:S) </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> DATA </p>
                    </div>
                </div>
        
            
        
        </div>

    </div>
  );
}
}

export default OldMeetCard;
