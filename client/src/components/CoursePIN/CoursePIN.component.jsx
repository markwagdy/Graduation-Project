import React, { Component } from 'react';
import './CoursePIN.style.scss';
import CustomButton from '../CustomButton/Custom-Button.component';


class CoursePIN extends Component
{
  constructor(props){
    super(props);
    this.state={
      show:true,
      random: null,
    }
    this.closepopup=this.closepopup.bind(this);

  }

  closepopup(){
    this.setState({show:false})
    {console.log(this.state.show)}
  }
  handle(){
    this.setState({random: this.min + (Math.random() * (this.max - this.min))})
  }
min =1;
max =10000;

    render(){
        return(
          <div id="id012" className="modalP" style={{display: this.state.show? 'block' : 'none' }}>
             
          <form className="modalP-content animate">
          <div className="imgcontainer">
         <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
         </div>
         <div className="bannerP"> Add New Course</div>
            <div style={{paddingLeft:"20px",paddingTop:"40px"}}> 
               <div>
                  <h1 className="fontsP" style={{display: "inline-block"}}>Course PIN</h1>
                 <br></br> 
                </div>

                <div  style={{marginTop:"30px"}}>
                <h1 className="fontsP" style={{display: "inline-block"}}>{this.state.random}</h1>
                </div>
                <CustomButton class="EnterbtnP">Copy</CustomButton>

            </div>
        
          </form>
         
      </div>
        

        );
    }
}
export default CoursePIN;