import React, { Component } from 'react';
import photo from './ico/fbPP.jpg'

class Notaya extends Component {
  render(){
  return ( 
      <div style={{display:"block",height:"135px",paddingLeft:"25px"}}> 

            <div className="NoteSenderName">
            DR./ 
               {this.props.coursedata.doctorName}
                           </div>

          <img className="NotayaSora" style={{display: "inline-block",marginRight:"5px",height:"60px"}} src={photo} alt="Dr photo" />

           <div className="Notaya" style={{display: "inline-block"}}>
           {this.props.index}

           </div>
           
           <hr className="hr1"></hr>
            
      </div>
  );
}
}

export default Notaya;
