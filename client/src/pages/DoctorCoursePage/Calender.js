import React, { Component } from 'react';
import Cal from './ico/cal.png'

// document.body.style.backgroundColor = "#FFFFFF";

class Calender extends Component {
  render(){
  return ( 
    <div>
      <img style={{width:"100%" ,boxShadow:" 0px 19px 26px rgba(0, 0, 0, 0.07)",borderRadius: "54px"}} src={Cal} alt="Calender"/>
    </div>

  );
}
}

export default Calender;
