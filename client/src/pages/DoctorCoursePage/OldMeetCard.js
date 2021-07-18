import React, { Component } from 'react';
import ReportButton from './ReportButton'
import MeetingAnalButton from './MeetingAnalButton'
import axios from 'axios';

class OldMeetCard extends Component {
    constructor(props){
        super(props);
    
      
        this.state={
          show:false,
        meeting:"",
          
        }
       
      }
      async componentDidMount() {

        await axios.get(  `http://localhost:8000/api/meeting/getMeeting/${this.props.index}`)
         .then((res) => {
        
        if (res.status===200) {
         console.log(res)
         this.setState({meeting:res.data.data})
         }
       }).catch((error) => {
         console.log(error)
       });
     
      }
  render(){
  return ( 
    <div>
        <div className="OldMeetCard">
        {this.props.role === "doctor" ?
       <MeetingAnalButton/>
      : null}

            {this.props.role === "doctor" ?    
             <ReportButton/>
             : null}

             
             <h1 style={{display: "inline-block",  fontSize: "30px"}}>{this.state.meeting.MeetingName}</h1>
             <h5 style={{display: "inline-block", paddingLeft:"50px"}} >Scheduled</h5>

             <div class="grid-container grid-in-card">
                    <div class="grid-item grid-item-in-card">
                        <p> Created By </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p>{this.props.coursedata.doctorName} </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> On </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> {this.state.meeting.Day} / {this.state.meeting.Month} / {this.state.meeting.Year} </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> time (H:M:S) </p>
                    </div>
                    <div class="grid-item grid-item-in-card">
                        <p> {this.state.meeting.Hour} : {this.state.meeting.Minute} : {this.state.meeting.Second} </p>
                    </div>
                </div>
        
            
        
        </div>

    </div>
  );
}
}

export default OldMeetCard;
