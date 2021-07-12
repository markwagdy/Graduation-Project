import React from 'react';
import './Doctor.style.scss';
import CourseCard from  '../../components/CourseCard/CourseCard.component';
import CreateCourseAlert from '../../components/createcourseAlert/createcourseAlert.component';
import axios from 'axios';
import CreatedCourse from './CreatedCourseCard';


class Doctor extends React.Component {

  constructor(props){
    super(props);

  
    this.state={
      show:false,
      doc:{
        courses:[]
      },
      
    }
    this.openNav=this.openNav.bind(this);
    
    this.handleCallback=this.handleCallback.bind(this);
  // 
  }
  
 async componentDidMount() {

   await axios.get(  `http://localhost:8000/api/getdoctor/${this.props.location.state.email}`)
    .then((res) => {
   
   if (res.status===200) {
    console.log(res)
    this.setState({doc:res.data.doc})
    }
  }).catch((error) => {
    console.log(error)
  });

 }



 handleCallback = (childData) =>{
  this.setState({doc: childData})
  console.log(this.state.doc)
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
      <div className="bGd">
      <div className="BWBoarder">
        {/* <div> <Navbar></Navbar> </div> */}
        <div className="Hbar">
          <div style={{overflow: "hidden", display:"flex", justifyContent: "space-between" }}> 
              <h1 style={{display: "inline-block"}}>Raven</h1>
              <h2 style={{display: "inline-block", marginRight: "100px"}}> Welcome {this.state.doc.username}</h2>
          </div>
        </div>

        <div>
          <span>   
          {
            this.state.doc.courses.map((index) => <div style={{display: "inline-block"}}> <CreatedCourse courses={index}></CreatedCourse> </div>)
          }  
          </span>

          <span style={{display: "inline-block"}} onClick={this.openNav}>
          <CourseCard></CourseCard>
          </span>
        </div>
        
      {
       this.state.show?
       <div>
        <CreateCourseAlert parentCallback={this.handleCallback} doctordata = {this.state.doc}/>
       </div>
        :""
      
      }
      </div>
          
      </div>
      );
    }
  }
  export default Doctor;