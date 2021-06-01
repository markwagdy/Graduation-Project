import React, { Component } from 'react';

class Notaya extends Component {
  render(){
  return ( 
      <div style={{display:"block",height:"135px",paddingLeft:"25px"}}> 

            <div className="NoteSenderName">
            Dr./Yasser Sami
            </div>

            <div className="NotayaSora" style={{display: "inline-block",marginRight:"5px"}}>
                    {/* <img src="" alt="Italian Trulli"/> */}
            </div>

           <div className="Notaya" style={{display: "inline-block"}}>
                msg
           </div>
           
           <hr className="hr1"></hr>
            
      </div>
  );
}
}

export default Notaya;
