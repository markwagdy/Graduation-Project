import React, { Component } from 'react';
import Scrollbars  from 'react-custom-scrollbars';
import Notaya from './Notaya'

class Notes extends Component {
  constructor(props){
    super(props);
    this.state={
       course:this.props.coursedata
      //  course:{
      //    notes:[]
      // }   
    }}
  render(){
    var text = "General Announcements\nand Notes.";
  return ( 
    <div  style={{paddingTop:"15px"}} >
        
            <div className="Notes">
                <div className="NotesHead">  {text.split("\n").map((i,key) => {return <div key={key}>{i}</div>; })} </div>

      
                <Scrollbars style={{top:"70px" ,height:600, width:440, backgroundColor:"white"}}>
          {
 this.state.course.notes.map((index) =><div style={{ marginTop:"20px"}}><Notaya index={index} coursedata={this.state.course}meetings={index} />  </div>)
       
          }     
                    
                </Scrollbars>


            </div>

    </div>
  );
}
}

export default Notes;
