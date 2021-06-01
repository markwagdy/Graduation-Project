import React, { Component } from 'react';
import BackButton from './BackButton'
import DropButton from './DropButton'
import CourseAnalButton from './CourseAnalButton'

class Hbar extends Component {
    render() { 
        return ( 

            <div className="Hbar" style={{overflow: "hidden",display:"block"}}>
                
                <div style={{display: "inline-block"}}> <BackButton/></div>
                <h1 style={{display: "inline-block"}} >CSE100, Course Name</h1>
                <div style={{display: "inline-block"}}> <DropButton/></div>
                <div style={{display: "inline-block"}}> <CourseAnalButton/></div>
                <h6>EsmElProject Welcome DR.Yasser Sami</h6>
            </div>
         );
    }
}
 
export default Hbar;