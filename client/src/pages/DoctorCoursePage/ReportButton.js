import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'


class ReportButton extends Component {
    state = {  }

    myfunction() {

        console.log("CLICKED");
        window.location.href = "http://192.168.1.5:8000/";
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