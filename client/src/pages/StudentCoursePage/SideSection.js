import React, { Component } from 'react';
import Calender from './Calender'
import Notes from './Notes'

class SideSection extends Component {
  render(){
  return ( 
    <div className="SideSection">
      {/* <Calender/>    */}
      <Notes coursedata={this.props.coursedata}/>
    </div>

  );
}
}

export default SideSection;
