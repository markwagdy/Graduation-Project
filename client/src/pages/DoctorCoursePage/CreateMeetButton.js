import React, { Component } from 'react';
import newmeet from "./ico/NewMeeting.png"
import NewMeetForm from './NewMeetForm'

class CreateMeetButton extends Component {

    constructor(props){
      super(props);
      this.state={
        show:false,
        meetingCreated:false,
        course:{
          meetings:[]
        },

    }
      this.myfunction=this.myfunction.bind(this);
      this.changeRoute=this.changeRoute.bind(this);
      
    
    this.handleCallback=this.handleCallback.bind(this);
 
    }

    myfunction() {
        this.setState({show:!this.state.show})
    }
    changeRoute(props){
      // const id = uuid();
      // this.props.history.push(`/meeting/live/${uuid()}`);
      window.location.assign('http://localhost:8000/');
      
    }

 handleCallback = (childData) =>{
  this.setState({course: childData})
  console.log(this.state.course)
  this.props.parentCallback(this.state.course);
} 

  render(){
  return ( 
    <div style={{paddingLeft:"80px", paddingBottom:"40px"}}>
    
        <button  onClick={this.myfunction} className="CreateMeetButton">
            <img style={{maxWidth:"100%"}}  src={newmeet} alt="Create New Meeting" />
        </button>
      
        {
          this.state.show?
          <div style={{position:"fixed", zIndex:"1500"}}> <NewMeetForm  parentCallback={this.handleCallback}  coursedata={this.props.coursedata} user={this.props.user}/>  </div>
          :""
        }

        
    </div>
  );
}
}

export default CreateMeetButton;
