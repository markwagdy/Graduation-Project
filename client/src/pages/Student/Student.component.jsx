import React from 'react';
import './Student.style.scss';
// import Navbar from  '../../components/Navbar/Nav-bar.component';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
// import { FaSuperscript } from 'react-icons/fa';
// import ReactDom from 'react-dom';
import CardAlert from '../../components/CardAlert/CardAlert.component';
import axios from 'axios';
import CreatedCourse from '../Doctor/CreatedCourseCard';
import LogOutComp from '../../components/logOut/LogOutComp';
// document.body.style.backgroundColor = "#0f5298";

class Student extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show:false,
      student:{
        courses:[]
      }
    }
    this.openNav=this.openNav.bind(this);
    this.handleCallback=this.handleCallback.bind(this);
  }
  async componentDidMount() {
  
    await axios.get(  `http://192.168.1.5:8000/api/getstudent/${this.props.location.state.email}`)
     .then((res) => {
    
    if (res.status===200) {
     this.setState({student:res.data.student})
     }
   }).catch((error) => {
     console.log(error)
   });
  }
  handleCallback = (childData) =>{
    this.setState({student: childData})
  } 
  openNav(){
    if(this.state.show)
    this.setState({show:false})
    else{
    this.setState({show:true})
  }
  }
    render(){
  
      
    return (
   
      <div className="bGs">

        <div className="BWBoarder">
          {/* <div> <Navbar></Navbar> </div> */}
          <div className="Hbar">
            <div style={{overflow: "hidden", display:"flex", justifyContent: "space-between" }}> 
              <h1 style={{display: "inline-block"}}>RAVEN</h1>
              <div>
                <h2 style={{marginRight: "100px"}}> Welcome {this.state.student.username}</h2>
                <LogOutComp></LogOutComp>
              </div>
            </div>
          </div>
          <div>
          <span>   
          {
            this.state.student.courses.map((index) => <div style={{display: "inline-block"}}>  <CreatedCourse user={this.state.student.role} courses={index}></CreatedCourse> </div>)
          }  
          </span>

          <span style={{display: "inline-block"}} onClick={this.openNav}>
          <CourseCard></CourseCard>
          </span>
        </div>
      {
       this.state.show?
       <div>
         <CardAlert parentCallback={this.handleCallback} studentdata = {this.state.student} />
       </div>
       :""
      }
      </div>
          
      </div>
      );
    }
  }
  export default Student;