import React, { Component } from 'react';
import './Meeting.style.scss';
import CustomButton from '../../components/CustomButton/Custom-Button.component';
import api from '../../api/index'

class Meeting extends Component{

    constructor(props)
    {
        super(props);
        this.state={

        }
       
    }
    render()
    {
        
        return(
            <div className='meeting-main'>
                <p>This is the Meeting page click on the button to create a meetig and start a call</p>
                <CustomButton  >Start Meeting</CustomButton>
            </div>
        );
    }

}
export default Meeting;