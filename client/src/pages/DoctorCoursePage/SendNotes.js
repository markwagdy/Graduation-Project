import React, { Component } from 'react';
import send from './ico/send.png'

class SendNotes extends Component {

  myfunction() {

}

  render(){
  return ( 

      <div className="SendNotes">
          <form > <input type="text" placeholder="Type your note" /> </form>

          <button style={{position:"absolute",top:"0",right:"0"}}>
            <img style={{height:"60px"}} src={send} alt="send note" onClick={this.myfunction}/>
          </button>

      </div>

  );
}
}

export default SendNotes;
