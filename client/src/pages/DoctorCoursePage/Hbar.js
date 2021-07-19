import React, { Component } from 'react';
import BackButton from './BackButton'
import DropButton from './DropButton'
import CourseAnalButton from './CourseAnalButton'

class Hbar extends Component {
    render() { 
        return ( 

            <div className="Hbar" style={{overflow: "hidden",display:"block"}}>
                
                <div style={{display: "inline-block"}}> <BackButton/></div>
                <h1 style={{display: "inline-block"}} >{this.props.coursedata.courseDesignator+this.props.coursedata.courseCode}, {this.props.coursedata.courseName}</h1>
                <div style={{display: "inline-block"}}> <DropButton coursedata={this.props.coursedata}/></div>
                {this.props.role === "doctor" ?
      <div style={{display: "inline-block"}}> <CourseAnalButton/></div>
      : null}


                <h6>COURSE BY DR. {this.props.coursedata.doctorName}</h6>
            </div>
         );
    }
}
 
export default Hbar;