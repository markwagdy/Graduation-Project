import React, { Component } from 'react';
import analytics from './ico/analytics.png'

class CourseAnalButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button className="CourseAB">
                <img style={{maxWidth:"100%",verticalAlign:"middle"}} src={analytics} alt="Course Overall Analytics" onClick={this.myfunction}/>
            </button>
         );
    }
}
 
export default CourseAnalButton;