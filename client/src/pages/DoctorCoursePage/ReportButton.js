import React, { Component } from 'react';
import reportico from './ico/reportico.png'
import reporticohov from './ico/reporticohov.png'

class ReportButton extends Component {
    state = {  }

    myfunction() {
        console.log("CLICKED");
    }

    render() { 
        return ( 
            <button className="report">
                <img className="centerox"  
                src={reportico} alt="drop" 
                onMouseOver={e => (e.currentTarget.src = reporticohov)}
                onMouseOut={e => (e.currentTarget.src = reportico)}
                onClick={this.myfunction}/>
            </button>
         );
    }
}
 
export default ReportButton;