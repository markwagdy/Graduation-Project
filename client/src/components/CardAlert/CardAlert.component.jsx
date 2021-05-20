import React, { Component } from 'react';
import './CardAlert.style.scss';
//import { Alert } from 'reactstrap';
import CustomButton from '../CustomButton/Custom-Button.component';


class CardAlert extends Component
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
           <span onClick={this.closepopup} className="close" title="Close Modal">&times;</span>
           </div>
            <div className="container">
              <h1>Add New Course</h1>
              <h3>Enter Course PIN</h3>
              <input className="inputt"type="text" placeholder="Please Enter Course PIN" name="PIN" required/>
              <CustomButton className="Enterbtn">Enter</CustomButton>
           
            </div>
            </form>
           
        </div>
      
        

        );
    }
}
export default CardAlert;