import React, { Component } from 'react';
import './CourseDoctorStyle.scss';
import LineCH from'./LineChart'
import Doughnut from'./DoughnutChart'
import PieChart from'./PieChart'
import HorizontalBar from'./HorizontalBar'

class MeetingAnal extends Component {
    constructor(props){
        super(props);
        this.state={
            show:true,
        }
        this.closepopup=this.closepopup.bind(this); 
    }

    closepopup(){
        this.setState({show:false});
      }

  render(){
  return ( 

    <div className="modalAnal" style={{display: this.state.show? 'block' : 'none' }}>
        <div className="BlackoutFull"></div>
         <div className="MeetingAnal">
        <div className="imgcontainer">
        <span onClick={this.closepopup.bind(this)} className="close" title="Close Modal">&times;</span>
        </div>
        <div style={{ width:"100%", height:"55px",backgroundColor:"#0F5298",textAlign:"center",paddingTop:"10px" }}> <h1 style={{color:"white"}}>Lecture Analytics</h1> </div>
       
        <div style={{paddingTop:"10px",marginLeft:"80px"}}>
            <div>
                 <div style={{width:"550px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",display: "inline-block"}}> <LineCH /> </div>
                 <div style={{width:"275px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",display: "inline-block",marginLeft:"20px"}}><PieChart pieInfo={this.props.pie}/> </div>
            </div>

            <div style={{marginTop:"10px",marginLeft:"100px"}}>
                 <div style={{width:"200px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",paddingBottom:"10px",display: "inline-block"}}> <Doughnut doughInfo={this.props.doughnut}/> </div>
                 <div style={{width:"400px",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.2)",paddingBottom:"10px",display: "inline-block",marginLeft:"20px"}}> <HorizontalBar barInfo={this.props.horizontalbar}/> </div>
            </div>
        </div>
    </div>
    </div>
   
   
  );
}
}

export default MeetingAnal;
