import React, { Component } from 'react';
import send from './ico/send.png'
import axios from 'axios';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/CustomButton/Custom-Button.component';

class SendNotes extends Component {
  constructor(props){
    super(props);
    this.onChangenote = this.onChangenote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
     this.state={
        coursedata:this.props.coursedata,
        note:'',
    };
}


onChangenote(e) {
  this.setState({  note: e.target.value })

}
onSubmit(e){ 
e.preventDefault();    
const Data={
note:this.state.note,
} 
if(Data.note===""){}
else{
  this.state.coursedata.notes.push(Data.note)
axios.put(`http://192.168.1.5:8000/api/addNote/${this.props.coursedata._id}`, Data)
.then((res) => {
    if (res.status === 200) {
      this.props.parentCallback(this.state.coursedata);
  
   }
}).catch((error) => {
    console.log(error)

});}}
  render(){
  return ( 

      <div className="SendNotes">
          <form onSubmit={this.onSubmit}>
             <input style={{paddingLeft:"50px"}} onChange={this.onChangenote} defaultValue={this.state.note} type="text" placeholder="Type your note" name="note" ></input> 
             {/* <CustomButton type='submit'>  <img style={{height:"60px"}} src={send} alt="send note" />
       </CustomButton>            
             */}
          <button  type='submit' style={{position:"absolute",top:"0",right:"0",cursor:"pointer"}}>
            <img style={{height:"60px"}} src={send} alt="send note" />
          </button>
          </form>
      </div>

  );
}
}

export default SendNotes;
