import React, { Component } from 'react';

class DropCI extends Component {
  render(){
  return ( 

    <div>
        <div className="Blackout"> </div>
        
    <div className="DropCI">
        
      <h1> <u>Course Information</u></h1>

      <h1 style={{color:"black",fontSize:"30px",paddingTop:"15px",display: "inline-block"}}>
          Instructors:
        </h1>
        <br></br>

                <h1 style={{color:"black",fontSize:"20px",paddingTop:"15px",paddingLeft:"15px",display: "inline-block" }}>
                   Doctor:  {this.props.coursedata.doctorName}
                    </h1>
                  <br></br>
             

                {/* <h1 style={{color:"black",fontSize:"20px",paddingLeft:"180px",fontWeight:"normal" }}>
                    TA: 
                    </h1> */}
                    
        <h1 style={{color:"black",fontSize:"30px",paddingTop:"25px",display: "inline-block"}}>
            Course Description:
        </h1>   
                <h1 style={{color:"black",fontSize:"20px",paddingLeft:"15px",fontWeight:"normal",width:"800px",textIndent:"50px",textAlign:"justify"}}>
                {this.props.coursedata.courseDescription}
                    </h1> 

        <h1 style={{color:"black",fontSize:"30px",paddingTop:"25px",display: "inline-block"}}>
          Course Pin:
        </h1>
                <h1 style={{fontSize:"30px",paddingTop:"15px",paddingLeft:"15px",display: "inline-block"}}>
                {this.props.coursedata.coursePin}
                    </h1>

    </div>

    </div>

  );
}
}

export default DropCI;
