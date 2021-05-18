import React, { Component } from 'react';
import './Student.style.scss';
import Navbar from  '../../components/Navbar/Nav-bar.component';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
import PopupStudent from '../../components/PopupStudent/PopupStudent.component';
import { FaSuperscript } from 'react-icons/fa';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
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
      <div>
        <div> <Navbar></Navbar> </div>
        <span onClick={this.openNav}>      
          <CourseCard></CourseCard>
          
        </span>
      {
       this.state.show?
       <div>
         <PopupStudent/>
       </div>:""
      }
      </div>
          
        
      );
    }
  }
  export default Student;