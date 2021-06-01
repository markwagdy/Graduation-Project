import React, { Component } from 'react';
import back from './ico/back.png'

class BackButton extends Component {
    state = {  }

    myfunction() {
        window.location.href="/Student/"
    }

    render() { 
        return ( 
            // <a  href="https://www.google.com/" target="_blank" rel="noreferrer"> 
            //      <img src={back} alt="back" onClick={this.myfunction}/>
            // </a>

            <button> 
                <img src={back} alt="back" onClick={this.myfunction}/>
            </button>

        
         );
    }
}
 
export default BackButton;