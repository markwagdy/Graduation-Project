import React, { Component } from 'react';
import './Student.style.scss';
import Navbar from  '../../components/Navbar/Nav-bar.component';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
import { FaSuperscript } from 'react-icons/fa';
import ReactDom from 'react-dom';
import CardAlert from '../../components/CardAlert/CardAlert.component';


document.body.style.backgroundColor = "#0f5298";

class Student extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show:false
    }
    this.openNav=this.openNav.bind(this);
  }

  openNav(){
    this.setState({show:true})
  }

    render(){
    return (
      <div className="BWBoarder">
        {/* <div> <Navbar></Navbar> </div> */}
        <div className="Hbar">
          <div style={{overflow: "hidden", display:"flex", justifyContent: "space-between" }}> 
              <h1 style={{display: "inline-block"}}>EsmElProject</h1>
              <h2 style={{display: "inline-block", marginRight: "100px"}}> Welcome Student Name</h2>
          </div>
        </div>
        <span onClick={this.openNav}>       
          <CourseCard></CourseCard>
          
        </span>
      {
       this.state.show?
       <div>
         <CardAlert/>
       </div>:""
      }
      </div>
          
        
      );
    }
  }
  export default Student;