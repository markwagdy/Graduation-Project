import React, { Component } from 'react';
import Calender from './Calender'
import Notes from './Notes'

class SideSection extends Component {
  render(){
  return ( 
    <div className="SideSection">
      <Calender/>   
      <Notes/>
    </div>

  );
}
}

export default SideSection;
