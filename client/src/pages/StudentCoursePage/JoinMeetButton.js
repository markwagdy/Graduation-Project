import React, { Component } from 'react';
import joinmeetbg from "./ico/joinmeetbg.png"
import join from "./ico/join.png"
import joinhov from "./ico/joinHov.png"
import axios from 'axios';

class JoinMeetButton extends Component {
  constructor(props){
    super(props);
    this.state={
     roomID:"" 
    }
    this.myfunction = this.myfunction.bind(this);
  }
    myfunction() {
      window.location.href= `http://192.168.1.5:8000/${this.state.roomID}`
    }
    
    async componentDidMount() {
                await axios.get(  `http://192.168.1.5:8000/hi/URLID`)
            .then((res) => { 
          if (res.status===200) {
            console.log(res.data.data)
            this.setState({roomID:res.data.data})
            // this.setState({coursedata:res.data.coursedata})
            }
          }).catch((error) => {
            console.log(error)
          }); 
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
