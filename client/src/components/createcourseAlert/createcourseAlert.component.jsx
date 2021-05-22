import React, { Component } from 'react';
import './createcourseAlert.style.scss';
//import { Alert } from 'reactstrap';
import CustomButton from '../CustomButton/Custom-Button.component';
import CoursePIN from '../CoursePIN/CoursePIN.component';




class CreateCourseAlert extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true,
      clicked: false
    }
    this.closepopup=this.closepopup.bind(this);

  }

  closepopup(){
    this.setState({show:false})
    // {console.log(this.state.show)}
  }

  showpin(){
    console.log("x");
    this.setState({clicked:true})
    
    
  
  }


    render(){
        

        return(
          <div id="id00" className="modalC" style={{display: this.state.show? 'block' : 'none' }}>
             
            <form className="modal-contentC animate">
            <div className="imgcontainer">
           <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
           </div>
           <div className="bannerC"> Create New Meeting </div>
              <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
                 <div>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Course Name : </h1>
                    <input className="MeetingNameInput" type="text" placeholder="Meeting Name" required/> <br></br> 
                  </div>

                  <div>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Course Code : </h1>
                    <CustomButton type= "button" className="btn1">Course Designator <select className="select"> <option>CSE</option><option>HUM</option><option>PHM</option></select></CustomButton>
                    <input className="N1" type="number"   required/> 
                    <input className="N1" type="number"   required/> 
                    <input className="N1" type="number"   required/> <br></br>
                  </div>

                  <div style={{marginTop:"15px"}}>
                    <h1 className="fontsC" style={{display: "inline-block", marginTop:"20px"}}> Course Description : </h1>
                    <textarea className="txtarea" placeholder="Description" required/> <br></br> 
                  </div> 

                  <div style={{marginTop:"5px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Semester : </h1>
                    <CustomButton type= "button" className="btn2">Select Semester Type <select className="select"> <option>Fall</option><option>Spring</option><option>Summer</option></select></CustomButton>
                    <input className="N2" type="number"  placeholder="year" required/> <br></br>
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Credit Hours : </h1>
                    <input className="numberinput" type="number" placeholder="Nb." required/> <br></br> 
                  </div>

                  <div style={{marginTop:"20px"}}>
                    <h1 className="fontsC" style={{display: "inline-block"}}> Doctor Name : </h1>
                    <input className="Doctorname" type="text" placeholder="Doctor Name" required/> <br></br> 
                  </div>
      
                  <CustomButton onClick={this.showpin.bind(this)} type="button" className="Enterbtn">Enter</CustomButton>

                  {
       this.state.clicked?
       <div>
        <CoursePIN/>
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


