import React, { Component } from 'react';
import './createcourseAlert.style.scss';
//import { Alert } from 'reactstrap';
import CustomButton from '../CustomButton/Custom-Button.component';




class CreateCourseAlert extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true
    }
    this.closepopup=this.closepopup.bind(this);

  }

  closepopup(){
    this.setState({show:false})
    {console.log(this.state.show)}
  }


    render(){
        return(
          <div id="id01" className="modal" style={{display: this.state.show? 'block' : 'none' }}>
             
            <form className="modal-content animate"  >
            <div className="imgcontainer">
           <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
           </div>
            <div className="container">
              <h1>Create New Course</h1>
              <label>Course Name :
              </label>
              <input className="in1" type="text" name="courseName" required/> <br></br> 
              <div>
                  <label>Course Code :</label>
                <CustomButton type= "button" className="btn1">Course Designator <select className="select"> <option>CSE</option><option>HUM</option><option>PHM</option></select></CustomButton>
                <input className="in2" type="text" name="coursecode" required/><br></br>
            </div>
            <label>
                Course Description: 
            </label>
            <textarea className="txtarea"></textarea>

             
              <CustomButton class="Enterbtn">Enter</CustomButton>
            </div>
          
            </form>
           
        </div>
      
        

        );
    }
}
export default CreateCourseAlert;