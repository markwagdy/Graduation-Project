import React, { Component } from 'react';
import back from './ico/back.png'

class BackButton extends Component {
    state = {  }

    myfunction() {
        console.log("CLICKED");
    }

    render() { 
        return ( 
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" class="button"> 
                 <img src={back} alt="back" onClick={this.myfunction}/>
            </a>

        
         );
    }
}
 
export default BackButton;