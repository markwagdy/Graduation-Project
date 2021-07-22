import React, { Component } from 'react';
import './LogOutCompStyle.css'

class LogOutComp extends Component {

  constructor(props){
    super(props);
    this.state={

    }

    this.logout=this.logout.bind(this); 
}

  logout(){
    localStorage.removeItem("user")
    window.location.href= `/`
 
   
  }

  render(){
  return ( 
    <div onClick={this.logout.bind(this)} className="logOutCompS">
        Log Out
    </div>

  );
}
}

export default LogOutComp;
