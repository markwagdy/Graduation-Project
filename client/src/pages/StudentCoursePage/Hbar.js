import React, { Component } from 'react';
import BackButton from './BackButton'
import DropButton from './DropButton'
import LogOutComp from '../../components/logOut/LogOutComp';

class Hbar extends Component {
    render() { 
        return ( 

            <div className="Hbar" style={{overflow: "hidden",display:"block"}}>
                
                <div style={{display: "inline-block"}}> <BackButton/></div>
                <h1 style={{display: "inline-block"}} >{this.props.coursedata.courseDesignator+this.props.coursedata.courseCode}, {this.props.coursedata.courseName}</h1>
                <div style={{display: "inline-block"}}> <DropButton coursedata={this.props.coursedata}/></div>
                {/* {this.props.role === "doctor" ?
      <div style={{display: "inline-block"}}> <CourseAnalButton/></div>
      : null} */}

            <div style={{display:"block"}}> 
                <h6 style={{display: "inline-block"}}>COURSE BY DR. {this.props.coursedata.doctorName}</h6>
                <LogOutComp></LogOutComp>
            </div>
               
            </div>

         );
    }
}
 
export default Hbar;