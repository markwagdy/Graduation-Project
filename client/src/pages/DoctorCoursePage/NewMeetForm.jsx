import React, { Component } from 'react';
import './createMeetingAlert.style.scss';
import Scrollbars  from 'react-custom-scrollbars';
import { v1 as uuid } from "uuid";
import axios from 'axios';

const Partarray = ['x'];
class NewMeetForm extends Component
{
  constructor(props){
    super(props);
    

    this.state={
      show:true,
      change:false,
      MeetingName:'',
      course:this.props.coursedata,
      doctorName:this.props.user.doctorName,
      // CreatedBy:'',
      Hour:'',
      Minute:'',
      Second:'',
      Day:'',
      Month:'',
      year:'',
      meetingId:"",
      meeting:"",
    //  parts:[],
      //Partions:'x',
      inputLinkClicked: false,
      meetingCreated:false
            
    }
    
    this.closepopup=this.closepopup.bind(this);
    // this.meetNameHandler=this.meetNameHandler.bind(this);
    // this.startTimenadlerHour=this.startTimenadlerHour.bind(this);
    // this.startTimenadlerMinute=this.startTimenadlerMinute.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    // this.startTimenadlerSecond=this.startTimenadlerSecond.bind(this);
    // this.partHandler=this.partHandler.bind(this);
  
  }
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }
  closepopup(){
    this.setState({show:false,meetingCreated:true});
    Partarray.splice(1,Partarray.length)
  }
  // meetNameHandler(e){
  //   this.setState({MeetingName:e.target.value})
  // }
 
  // startTimenadlerHour(e){
  //   this.setState({Hour:e.target.value});
  // }
  // startTimenadlerMinute(e){
  
  //   this.setState({Minute:e.target.value});
    
  // }
  // startTimenadlerSecond(e){
  //   this.setState({second:e.target.value});
  // }
  // partHandler(e){

  // }
  

  // addPart(){
  //   Partarray.push( this.state.Partions.toString() );
  //   console.log(Partarray);
  //   this.setState({
  //     inputLinkClicked: true
  //   })
  // }
  onSubmit(e){
    e.preventDefault(); 
    const userData={
      MeetingName:this.state.MeetingName,
      Hour:this.state.Hour,
      Minute:this.state.Minute,
      Second:this.state.Second,
      Day:this.state.Day,
      Month:this.state.Month,
      Year:this.state.Year,
      courseId:this.state.course._id
    } 
    console.log(userData)
  axios.post('http://localhost:8000/api/meeting', userData)
    .then((res) => {
        if (res.status === 201) {
       this.setState({meetingId:res.data.id})
       this.setState({meeting:res.data.meeting})
       axios.put(`http://localhost:8000/api/addMeeting/${this.props.coursedata._id}`, {meetingId:this.state.meetingId} )
    .then((res) => {
        if (res.status === 200) {
      this.state.course.meetings.push(res.data.id)
      console.log(this.state.course)
      this.props.parentCallback(this.state.course);
      this.props.parentCallback1(this.state.meeting);
    }
    }).catch((error) => {
        console.log(error)
   
    });
    }
    }).catch((error) => {
        console.log(error)
   
    });
    
    }

    render(){
        

        //  const PartList=Partarray.map((e)=>
        //  <div>
        //    <form className="Partioning">
        //      <input className="partinput"  type="text" value="Part Name" key={e.id} onChange={this.partHandler} required/> 
        //    </form>
        //  </div> )
        return(
          
          <div id="id01" className="modalS" style={{display: this.state.show? 'block' : 'none' }}>
             
            <form className="modal-contentS animate" onSubmit={this.onSubmit.bind(this)} >
            <div className="imgcontainerD">
           <span onClick={this.closepopup} className="close" title="Close Modal">&times;</span>
           </div>
           <div className="banner"> Create New Meeting </div>
              <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
                 <div>
                    <h1 className="fonts" style={{display: "inline-block"}}> Meeting Name </h1>
                    <input name="MeetingName" className="MeetingNameInput"  type="text" value={this.state.MeetingName} onChange={this.handleChange} placeholder="Meeting Name" required/> <br></br> 
                  </div>

                  <div style={{marginTop:"15px"}}>
                    <h1 className="fonts" style={{display: "inline-block",top:"-10px"}}> Created By </h1>
                    
                    <input className="Doctorname" type="text" placeholder="Doctor Name" onChange={this.handleChange} name="doctorName" value= {this.state.doctorName}   required/> <br></br> 
                        
                  </div> 

                  
                  <div style={{marginTop:"10px"}}>
                    <h1 className="fonts" style={{display: "inline-block"}}> Start Date (D:M:Y) </h1>
                    <input className="DurationH" name="Day" type="number"  placeholder="D"  value={this.state.Day} onChange={this.handleChange}  required/> 
                    <input className="DurationM" name="Month"  type="number" placeholder="M" value={this.state.Month} onChange={this.handleChange} required/> 
                    <input className="DurationS" name="Year" type="number" placeholder="Y"  value={this.state.Year} onChange={this.handleChange} required/> <br></br> 
                  </div>   

      

                  <div style={{marginTop:"10px"}}>
                    <h1 className="fonts" style={{display: "inline-block"}}> Start Time (H:M:S) </h1>
                    <input className="DurationH" name="Hour" value={this.state.Hour} onChange={this.handleChange} type="number" placeholder="H"  required/> 
                    <input className="DurationM" name="Minute"  type="number" placeholder="M" value={this.state.Minute} onChange={this.handleChange} required/> 
                    <input className="DurationS" name="Second" type="number" placeholder="S"  value={this.state.Second} onChange={this.handleChange} required/> <br></br> 
                  </div>   
 

                  <hr className="hr2"></hr> 

                  {/* <h1 style={{color:"black",fontSize:"25px",marginBottom:"5px"}}>
                      Session Partitioning
                  </h1>         
                  
                  <Scrollbars autoHeight>
                  {<div>
                    {PartList}
                  </div> }
                  </Scrollbars>

                  <button onClick={this.addPart.bind(this)} className="plusbutton" type="button" > + </button>
                    */}
                   <button type="submit" className="createbutton">  Create  </button> 
                   
              </div>
          
            </form>
           
        </div>
      
        

        );
    }
}
export default NewMeetForm;