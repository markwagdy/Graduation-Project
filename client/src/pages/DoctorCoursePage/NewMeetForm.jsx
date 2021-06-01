import React, { Component } from 'react';
import './createMeetingAlert.style.scss';
import Scrollbars  from 'react-custom-scrollbars';

const Partarray = ['x'];
class NewMeetForm extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true,
      change:false,
      MeetingName:'',
      // CreatedBy:'',
      Hour:'',
      Minute:'',
      second:'',
      parts:[],
      Partions:'x',
      inputLinkClicked: false
      
    }
    this.closepopup=this.closepopup.bind(this);
    this.meetNameHandler=this.meetNameHandler.bind(this);
    this.startTimenadlerHour=this.startTimenadlerHour.bind(this);
    this.startTimenadlerMinute=this.startTimenadlerMinute.bind(this);
  
    this.startTimenadlerSecond=this.startTimenadlerSecond.bind(this);
    this.partHandler=this.partHandler.bind(this);
    
  }
  
  closepopup(){
    this.setState({show:false});
    Partarray.splice(1,Partarray.length)
  }
  meetNameHandler(e){
    this.setState({MeetingName:e.target.value})
  }
 
  startTimenadlerHour(e){
    this.setState({Hour:e.target.value});
  }
  startTimenadlerMinute(e){
  
    this.setState({Minute:e.target.value});
    
  }
  startTimenadlerSecond(e){
    this.setState({second:e.target.value});
  }
  partHandler(e){

  }
  

  addPart(){
    Partarray.push( this.state.Partions.toString() );
    console.log(Partarray);
    this.setState({
      inputLinkClicked: true
    })
  }
  

    render(){
        

         const PartList=Partarray.map((e)=>
         <div>
           <form className="Partioning">
             <input className="partinput"  type="text" value="Part Name" key={e.id} onChange={this.partHandler} required/> 
           </form>
         </div> )
        return(
          
          <div id="id01" className="modalS" style={{display: this.state.show? 'block' : 'none' }}>
             
            <form className="modal-contentS animate"  >
            <div className="imgcontainerD">
           <span onClick={this.closepopup} className="close" title="Close Modal">&times;</span>
           </div>
           <div className="banner"> Create New Meeting </div>
              <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
                 <div>
                    <h1 className="fonts" style={{display: "inline-block"}}> Meeting Name </h1>
                    <input className="MeetingNameInput" value={this.state.MeetingName} onChange={this.meetNameHandler}  type="text" placeholder="Meeting Name" required/> <br></br> 
                  </div>

                  <div style={{marginTop:"15px"}}>
                    <h1 className="fonts" style={{display: "inline-block",top:"-10px"}}> Created By </h1>
                    <div className="CreatedBy" >                     </div>
                  </div> 

                  <div style={{marginTop:"10px"}}>
                    <h1 className="fonts" style={{display: "inline-block"}}> Start Time (H:M:S) </h1>
                    <input className="DurationH" value={this.state.Hour} onChange={this.startTimenadlerHour} type="number" placeholder="H"  required/> 
                    <input className="DurationM" type="number" placeholder="M" value={this.state.Minute} onChange={this.startTimenadlerMinute} required/> 
                    <input className="DurationS" type="number" placeholder="S"  value={this.state.second} onChange={this.startTimenadlerSecond} required/> <br></br> 
                  </div>   

                  <hr className="hr2"></hr>  

                  <h1 style={{color:"black",fontSize:"25px",marginBottom:"5px"}}>
                      Session Partitioning
                  </h1>         
                  
                  <Scrollbars autoHeight>
                  {<div>
                    {PartList}
                  </div> }
                  </Scrollbars>

                  <button onClick={this.addPart.bind(this)} className="plusbutton" type="button" > + </button>
                  <button className="createbutton">  Create  </button>

              </div>
          
            </form>
           
        </div>
      
        

        );
    }
}
export default NewMeetForm;