import React from 'react';
import './Doctor.style.scss';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
import CreateCourseAlert from '../../components/createcourseAlert/createcourseAlert.component';



class Doctor extends React.Component {

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
      <div className="bGd">
      <div className="BWBoarder">
        {/* <div> <Navbar></Navbar> </div> */}
        <div className="Hbar">
          <div style={{overflow: "hidden", display:"flex", justifyContent: "space-between" }}> 
              <h1 style={{display: "inline-block"}}>EsmElProject</h1>
              <h2 style={{display: "inline-block", marginRight: "100px"}}> Welcome Doctor Name</h2>
          </div>
        </div>
        <span onClick={this.openNav}>       
          <CourseCard></CourseCard>
          
        </span>
      {
       this.state.show?
       <div>
        <CreateCourseAlert/>
       </div>
        :""
      }
      </div>
          
      </div>
      );
    }
  }
  export default Doctor;