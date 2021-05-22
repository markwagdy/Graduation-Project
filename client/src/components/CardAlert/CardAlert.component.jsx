import React, { Component } from 'react';
import './CardAlert.style.scss';
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
    // {console.log(this.state.show)}
  }


    render(){
        return(
          <div id="id011" className="modall" style={{display: this.state.show? 'block' : 'none' }}>
             
          <form className="modall-content animate">
          <div className="imgcontainer">
         <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
         </div>
         <div className="bannerl"> Add New Course</div>
            <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
               <div>
                  <h1 className="fontsl" style={{display: "inline-block"}}> Enter Course PIN</h1>
                 <br></br> 
                </div>

                <div style={{marginTop:"30px"}}>
                  <input className="inputl" type="text" required/> <br></br> 
                </div>
                <CustomButton className="Enterbtn">Enter</CustomButton>

            </div>
        
          </form>
         
      </div>
        

        );
    }
}
export default CardAlert;