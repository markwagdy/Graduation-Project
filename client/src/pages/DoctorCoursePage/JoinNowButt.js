import React, { Component } from 'react';
import MeetingAnalytics from './ico/MeetingAnalytics.png'
import MeetingAnalyticsHov from './ico/MeetingAnalyticsHov.png'
import MeetingAnal from'./MeetingAnal'

class JoinNowButt extends Component {
    constructor(props){
        super(props);
        this.state={
          show:false,
          
      }
        this.myfunction=this.myfunction.bind(this);
    }
    myfunction() {
       
    }

    componentDidMount(){
 
    }


    render() { 
        return ( 
            <div>
                <button className="meetanalbutt">
                <img style={{height:"100%"}} 
                src={MeetingAnalytics} alt="Join now" 
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
 
export default JoinNowButt;