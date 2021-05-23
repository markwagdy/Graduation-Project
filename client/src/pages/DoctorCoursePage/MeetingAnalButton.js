import React, { Component } from 'react';
import MeetingAnalytics from './ico/MeetingAnalytics.png'
import MeetingAnalyticsHov from './ico/MeetingAnalyticsHov.png'

class ReportButton extends Component {
    state = {  }

    myfunction() {
        console.log("CLICKED");
    }

    render() { 
        return ( 
            <button className="meetanalbutt">
                <img style={{height:"100%"}} 
                src={MeetingAnalytics} alt="Meeting Analytics" 
                onMouseOver={e => (e.currentTarget.src = MeetingAnalyticsHov)}
                onMouseOut={e => (e.currentTarget.src = MeetingAnalytics)}
                onClick={this.myfunction}/>
            </button>
         );
    }
}
 
export default ReportButton;