import React, { Component } from 'react';

class ReportButton extends Component {
    state = {  }

    myfunction() {
        console.log("CLICKED");
    }

    render() { 
        return ( 
            <button className="report" onClick={this.myfunction}>
                Start Meeting
            </button>
         );
    }
}
 
export default ReportButton;