import React, { Component } from 'react';
import './CardAlert.style.scss';
import { Alert } from 'reactstrap';


class CardAlert extends Component
{


    render(){
        return(
    <div>
      <Alert className="alert">
        <h4 >Please Enter Course Code</h4>
        <hr className="line"></hr>
        <button> Enter Code </button>
      </Alert>
    </div>

        );
    }
}
export default CardAlert;