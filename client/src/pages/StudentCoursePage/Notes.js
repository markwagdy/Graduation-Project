import React, { Component } from 'react';
import Scrollbars  from 'react-custom-scrollbars';
import Notaya from './Notaya'

class Notes extends Component {
  render(){
    var text = "General Announcements\nand Notes.";
  return ( 
    <div  style={{paddingTop:"15px"}} >
        
            <div className="Notes">
                <div className="NotesHead">  {text.split("\n").map((i,key) => {return <div key={key}>{i}</div>; })} </div>

                <Scrollbars style={{ height:350, width:440, backgroundColor:"white"}}>
                    <Notaya/>
                    <Notaya/>
                    <Notaya/>
                    <Notaya/>
                    <Notaya/>
                    <Notaya/>
                </Scrollbars>


            </div>

    </div>
  );
}
}

export default Notes;
