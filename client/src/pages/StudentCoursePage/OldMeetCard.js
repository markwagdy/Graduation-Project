import React, { Component } from 'react';

class OldMeetCard extends Component {
  render(){
  return ( 
    <div>
        <div className="OldMeetCardStudent">
             
             <h1 style={{display: "inline-block",  fontSize: "30px"}}>Lecture X, Name</h1>
             <h5 style={{position:"absolute",right:"0",margin:"25px 100px 0px 0px",fontSize: "30px"}} >Finished</h5>

             <div class="grid-container grid-in-card-Student">
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
