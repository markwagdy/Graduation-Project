import React, { Component } from 'react';
import newmeet from "./ico/NewMeeting.png"
import NewMeetForm from './NewMeetForm'

class CreateMeetButton extends Component {

    constructor(props){
      super(props);
      this.state={
        show:false,
        meetingCreated:false
    }
      this.myfunction=this.myfunction.bind(this);
      this.changeRoute=this.changeRoute.bind(this);
    }

    myfunction() {
        this.setState({show:!this.state.show})
    }
    changeRoute(props){
      // const id = uuid();
      // this.props.history.push(`/meeting/live/${uuid()}`);
      window.location.assign('http://localhost:8000/');
      
    }
    

  render(){
  return ( 
    <div style={{paddingLeft:"80px", paddingBottom:"40px"}}>
    
        <button  onClick={this.changeRoute} className="CreateMeetButton">
            <img style={{maxWidth:"100%"}}  src={newmeet} alt="Create New Meeting" />
        </button>
      
        {
          this.state.show?
          <div style={{position:"fixed", zIndex:"1500"}}> <NewMeetForm/>  </div>
          :""
        }

        
    </div>
  );
}
}

export default CreateMeetButton;
