import React, { Component } from 'react';
import './CoursePIN.style.scss';


class CoursePIN extends Component
{
  constructor(props){
  
    super(props);

    this.state={
      show:true,
    }
    this.closepopup=this.closepopup.bind(this);
    // this.onSubmit1=this.onSubmit1.bind(this);
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = this.props.pin;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  

  }

  closepopup(){
    this.setState({show:false})
    //{console.log(this.state.show)}
  }

//   onSubmit1 = (e) => {
//     var dummy = document.createElement("textarea");
//     document.body.appendChild(dummy);
//     dummy.value = this.props.pin;
//     dummy.select();
//     document.execCommand("copy");
//     document.body.removeChild(dummy);
//     console.log(this.props.pin)
   
// }

    render(){
        return(
          <div id="id012" className="modalP modalP-content animate" style={{display: this.state.show? 'block' : 'none' }}>
             
          <div className="imgcontainer">
         <span onClick={this.closepopup} class="close" title="Close Modal">&times;</span>
         </div>
         <div className="bannerP">Course Added</div>
            <div style={{paddingTop:"40px",textAlign:"center"}}> 
               <div>
                  <h1 className="fontsP" style={{display: "inline-block"}}>Course PIN</h1>
                 <br></br> 
                </div>


                <div style={{marginTop:"30px"}}>
                <h1 className="fontsP" id="pin" style={{display: "inline-block"}}>{this.props.pin}</h1>
                </div>
                {/* <CustomButton onClick={() => this.onSubmit1.bind(this)} class="EnterbtnP">Copy</CustomButton> */}
                <h1 className="fontsP" style={{display: "inline-block",color:"gray",fontSize:"25px",paddingTop:"10px"}}>Copied To Your Clipboard</h1>
                 <br></br> 
               
            </div>
         
      </div>
        

        );
    }
}
export default CoursePIN;