import React, { Component } from 'react';
import './CardAlert.style.scss';
import CustomButton from '../CustomButton/Custom-Button.component';
import axios from 'axios';


class CardAlert extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true,
      clicked: false,
      coursePin:"",
      student:this.props.studentdata,
      course:""
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
     axios.get(`http://192.168.1.5:8000/api/CourseByPin/${this.state.coursePin}` )
    .then((res) => {
        if (res.status === 200) {
      this.state.student.courses.push(res.data.coursedata._id)

      this.setState({course:res.data.coursedata})
      axios.put(`http://192.168.1.5:8000/api/addCoursestudent/${this.state.student._id}`, {courseId:this.state.course._id} )
    .then((res) => {
        if (res.status === 200) {
      this.props.parentCallback(this.state.student);
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
          <div id="id011" className="modall" style={{display: this.state.show? 'block' : 'none' }}>
             
          <form className="modall-content animate" onSubmit={this.onSubmit.bind(this)}>
          <div className="imgcontainer">
         <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
         </div>
         <div className="bannerl"> Add New Course</div>
            <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
               <div>
                  <h1 className="fontsl" style={{display: "inline-block"}}> Enter Course PIN</h1>
                 <br></br> 
                </div>

                <div style={{marginTop:"30px"}}>
                  <input className="inputl" name="coursePin" type="text" value={this.state.coursePin} onChange={this.handleChange} required/> <br></br> 
                </div>
                <CustomButton type="submit" className="Enterbtn">Enter</CustomButton>
               
            </div>
        
          </form>
         
      </div>
        

        );
    }
}
export default CardAlert;