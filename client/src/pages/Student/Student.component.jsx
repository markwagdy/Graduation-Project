import React, { Component } from 'react';
import './Student.style.scss';
import Navbar from  '../../components/Navbar/Nav-bar.component';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
import { FaSuperscript } from 'react-icons/fa';
import ReactDom from 'react-dom';
import CardAlert from '../../components/CardAlert/CardAlert.component';
import axios from 'axios';
// document.body.style.backgroundColor = "#0f5298";

class Student extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show:false,
      studname:''
    }
    this.openNav=this.openNav.bind(this);
  }
  async componentDidMount() {
  

    await axios.get(  `http://localhost:8000/api/getstudent/${this.props.location.state.email}`)
     .then((res) => {
    
    if (res.status===200) {
     console.log(res)
     this.setState({studname:res.data.username})
     }
   }).catch((error) => {
     console.log(error)
   });
  }
  openNav(){
    this.setState({show:true})
  }

    render(){
    return (
      <div className="bGs">

        <div className="BWBoarder">
          {/* <div> <Navbar></Navbar> </div> */}
          <div className="Hbar">
            <div style={{overflow: "hidden", display:"flex", justifyContent: "space-between" }}> 
              <h1 style={{display: "inline-block"}}>Raven</h1>
              <h2 style={{display: "inline-block", marginRight: "100px"}}> Welcome {this.state.studname}</h2>
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
          
      </div>
      );
    }
  }
  export default Student;