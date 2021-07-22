import React, { Component } from 'react';
import './Doctor.style.scss';
import axios from 'axios';
import { withRouter } from "react-router-dom";
class Doctor extends React.Component {

    constructor(props){
      super(props);
      this.state={
        show:false,
        courses:this.props.courses,
        coursedata:""
      }
      this.open = this.open.bind(this);
    }
    open(){
      if(this.props.user.role==="doctor")
        this.props.history.push('/doctor/course', { coursedata:this.state.coursedata , user:this.props.user})
        else {
          this.props.history.push('/student/course', { coursedata:this.state.coursedata , user:this.props.user})

        }
       
        }
    async componentDidMount() {
             await axios.get(  `http://192.168.1.5:8000/api/Course/${this.state.courses}`)
         .then((res) => {
        
        if (res.status===200) {
         this.setState({coursedata:res.data.coursedata})
         }
       }).catch((error) => {
         console.log(error)
       });
        } 
        
  
      render(){

      return (
          <div onClick={this.open}>
                <div className="CreatedCourseCard">
                    {this.state.coursedata.courseDesignator+this.state.coursedata.courseCode}
                    <div className="CreatedCourseName">
                    {this.state.coursedata.courseName}                    
                    </div>
                </div>
          </div>
        );
      }
    }
    export default withRouter(Doctor);