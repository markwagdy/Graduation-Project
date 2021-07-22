import React, { Component } from 'react';
import './createcourseAlert.style.scss';
//import { Alert } from 'reactstrap';
import CustomButton from '../CustomButton/Custom-Button.component';
import CoursePIN from '../CoursePIN/CoursePIN.component';
import axios from 'axios';



class CreateCourseAlert extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true,
      clicked: false,
      courseName:"",
      doctorName:this.props.doctordata.username,
      courseCode:"",
      courseDesignator:"",
      courseDescription:"",
      coursePin:Math.floor(Math.random() * 100000) + 1,
      semesterYear:"",
      semesterType:"",
      creditHours:"",
      courseId:"",
      drEmail:"",
      doctor:this.props.doctordata,
    //  meetingId:""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.closepopup=this.closepopup.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
    this.showpin=this.showpin.bind(this);
  }
 handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  closepopup(){
    this.setState({show:false})
    // {console.log(this.state.show)}
  }

  showpin(){
    this.setState({clicked:true})
  }
 onSubmit(e){
    e.preventDefault(); 
   // console.log(this.state.coursePin)
  //  const coursedata={
  //   courseId:this.state.courseId};
    const userData={
      courseName:this.state.courseName,
      doctorName:this.state.doctorName,
      courseCode:this.state.courseCode,
      courseDesignator:this.state.courseDesignator,
      courseDescription:this.state.courseDescription,
      coursePin:this.state.coursePin,
      semesterYear:this.state.semesterYear,
      semesterType:this.state.semesterType,
      creditHours:this.state.creditHours,
    //courseId:this.state.courseId,
      //drEmail:"",
      doctor:this.state.doctor,
      notes:[]
      //meetingId:"" 
    } 
  axios.post('http://192.168.1.5:8000/api/Course', userData)
    .then((res) => {
        if (res.status === 201) {
       this.setState({courseId:res.data.id})
       axios.put(`http://192.168.1.5:8000/api/addCourse/${this.props.doctordata._id}`, {courseId:this.state.courseId} )
    .then((res) => {
        if (res.status === 200) {
      this.state.doctor.courses.push(res.data.id)
      this.props.parentCallback(this.state.doctor);
    }
    }).catch((error) => {
        console.log(error)
   
    });
    }
    }).catch((error) => {
        console.log(error)
   
    });

  
    this.showpin(); 
    
    }
 

    render(){
        

        return(
          <div id="id00" className="modalC" style={{display: this.state.show? 'block' : 'none' }}>
             
            <form className="modal-contentC animate"  onSubmit={this.onSubmit.bind(this)}>
            <div className="imgcontainer">
           <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
           </div>
           <div className="bannerC"> Create New Course </div>
              <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
                 <div>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Course Name : </h1>
                    <input name="courseName" className="MeetingNameInput" onChange={this.handleChange} value={this.state.courseName} type="text" placeholder="Course Name" required/> <br></br> 
                  </div>

                  <div>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Course Code : </h1>
                    <CustomButton type= "button"  className="bdesign">Course Designator <select name="courseDesignator" onChange={this.handleChange} value={this.state.courseDesignator} className="select">  <option value="" defaultValue disabled hidden>Choose</option> <option value="CSE">CSE</option><option value="HUM">HUM</option><option value="PHM">PHM</option></select></CustomButton>
                    <input className="N1" type="number" value={this.state.courseCode} onChange={this.handleChange} name="courseCode" required/>  <br></br>
                  </div>

                  <div style={{marginTop:"15px"}}>
                    <h1 className="fontsC" style={{display: "inline-block", marginTop:"20px"}}> Course Description : </h1>
                    <textarea className="txtarea1" name="courseDescription" onChange={this.handleChange} value={this.state.courseDescription} placeholder="Description" /> <br></br> 
                  </div> 

                  <div style={{marginTop:"5px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Semester : </h1>
                    <CustomButton type= "button" className="bsem">Select Semester Type <select value={this.state.semesterType} onChange={this.handleChange} name="semesterType"className="select">  <option value="" defaultValue disabled hidden>Choose</option><option value="Fall">Fall</option><option value="Spring">Spring</option><option value="Summer">Summer</option></select></CustomButton>
                    <input className="N2" type="number" name="semesterYear" onChange={this.handleChange} value={this.state.semesterYear}  placeholder="year" required/> <br></br>
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Credit Hours : </h1>
                    <input className="numberinput" type="number" placeholder="Nb." onChange={this.handleChange} name="creditHours" value={this.state.creditHours} required/> <br></br> 
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Doctor Name : </h1>
                    <input className="Doctorname" type="text" placeholder="Doctor Name" name="doctorName" value={this.state.doctorName} onChange={this.handleChange} required/> <br></br> 
                  </div>
      
                  <CustomButton  type="submit" className="Enterbtn">Enter</CustomButton>

                  {
       this.state.clicked?
       <div>
        <CoursePIN pin={this.state.coursePin}/>
       </div>
        :""
      }

              </div>
          
            </form>
           
        </div>
      
        

        );
    }
}
export default CreateCourseAlert;


