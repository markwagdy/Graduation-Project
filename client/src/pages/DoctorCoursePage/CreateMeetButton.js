import React, { Component } from 'react';
import newmeet from "./ico/NewMeeting.png"
import NewMeetForm from './NewMeetForm'

class CreateMeetButton extends Component {

    constructor(props){
      super(props);
      this.state={ show:false}
      this.myfunction=this.myfunction.bind(this);
    }

    myfunction() {
        this.setState({show:!this.state.show})
    }
    

  render(){
  return ( 
    <div style={{paddingLeft:"80px", paddingBottom:"40px"}}>
        <button  onClick={this.myfunction} className="CreateMeetButton">
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
