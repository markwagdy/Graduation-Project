import React, { Component } from 'react';
import joinmeetbg from "./ico/joinmeetbg.png"
import join from "./ico/join.png"
import joinhov from "./ico/joinHov.png"

class JoinMeetButton extends Component {

    myfunction() {
      window.location.href="/Meeting/"
    }
    

  render(){
  return ( 

        <div style={{marginLeft:"80px", marginBottom:"40px",backgroundImage: `url(${joinmeetbg})`}} className="JoinMeetButton">
            <button>
                <img style={{height:"100%",position:"absolute",top:"0",right:"0"}} 
                        src={join} alt="Join" 
                        onMouseOver={e => (e.currentTarget.src = joinhov)}
                        onMouseOut={e => (e.currentTarget.src = join)}
                        onClick={this.myfunction}/>
              </button>


            <h1 style={{position:"absolute",color:"white",fontSize:"30px",marginTop:"-10px"}}> Lecture 8 </h1> 

            <div>
                <h1 style={{position:"absolute",color:"white",fontSize:"20px", display:"inline-block",marginTop:"22px",marginLeft:"20px"}}> 
                      Created By 
                </h1>  
                <h1 style={{position:"absolute",color:"white",fontSize:"20px", display:"inline-block",marginTop:"22px",marginLeft:"200px"}}>
                       Duration
                </h1> 
            </div> 

            <div>
            <h1 style={{position:"absolute",color:"white",fontSize:"20px", display:"inline-block",marginTop:"42px",marginLeft:"20px",fontWeight:"lighter"}}>
                      7ot esm el dr
            </h1> 
            <h1 style={{position:"absolute",color:"white",fontSize:"20px", display:"inline-block",marginTop:"42px",marginLeft:"200px",fontWeight:"lighter"}}>
                    7ot el duration
            </h1> 

            <h1 style={{position:"absolute",color:"white",fontSize:"35px", display:"inline-block",marginTop:"65px"}}>
                      Occurring Now!
            </h1> 

            </div> 

        </div>

  );
}
}

export default JoinMeetButton;
