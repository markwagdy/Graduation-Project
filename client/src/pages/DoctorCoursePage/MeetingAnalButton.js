import React, { Component } from 'react';
import MeetingAnalytics from './ico/MeetingAnalytics.png'
import MeetingAnalyticsHov from './ico/MeetingAnalyticsHov.png'
import MeetingAnal from'./MeetingAnal'

class MeetingAnalButton extends Component {
    constructor(props){
        super(props);
        this.state={
          show:false,
          pie:[],
          doughnut:[],
          horizontalbar:[]
      }
        this.myfunction=this.myfunction.bind(this);
    }
    myfunction() {
        this.setState({show:!this.state.show})
    }

    componentDidMount(){
        fetch("https://flask-emotion-service.herokuapp.com/getPie").then(res=>res.json()).then(
            result=>{
                this.setState({pie:result});
            }
        )
        fetch("https://flask-emotion-service.herokuapp.com/getBar").then(res=>res.json()).then(
            result=>{
                this.setState({horizontalbar:result});
            }
        )
        fetch("https://flask-emotion-service.herokuapp.com/getDoughnut").then(res=>res.json()).then(
            result=>{
                this.setState({doughnut:result});
            }
        )
    }


    render() { 
        return ( 
            <div>
                <button className="meetanalbutt">
                <img style={{height:"100%"}} 
                src={MeetingAnalytics} alt="Meeting Analytics" 
                onMouseOver={e => (e.currentTarget.src = MeetingAnalyticsHov)}
                onMouseOut={e => (e.currentTarget.src = MeetingAnalytics)}
                onClick={this.myfunction.bind(this)}/>
                </button>

                {
                     
                    this.state.show?
                    
                    <MeetingAnal {...this.state}/> 
                    :""
                }

            </div>
            
         );
    }
}
 
export default MeetingAnalButton;