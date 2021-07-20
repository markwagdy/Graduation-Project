import React, { Component } from 'react';
import OldMeetCard from './OldMeetCard'

class OldMeeting extends Component {
  constructor(props){
    super(props);
    this.state={
      course:this.props.coursedata
      // course:{
      //   meetings:[]
      // }   
    }
    // this.setState({course:this.props.coursedata})
    // console.log(this.state.course)
    this.handleCallback=this.handleCallback.bind(this);
  }
  
 handleCallback = (childData) =>{
  this.setState({course: childData})
  console.log(this.state.course)
} 
  render(){
  return ( 
    <div class="grid-container">
          <div class="grid-item">
          {
   
            this.state.course.meetings.map((index) =><div style={{display: "inline-block", marginTop:"20px"}}><OldMeetCard index={index} coursedata={this.state.course}meetings={index} role={this.props.role}/>  </div>)
          } 
                    
          </div>
         
    </div>

  );
}
}

export default OldMeeting;
