
import './StudentCourse.style.scss';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Alert} from 'reactstrap';
import React, { Component } from 'react';
import * as IoIosicon from 'react-icons/io';


 class StudentCourse extends Component
 {
     showcontent=()=>{
       return( <p>
        To let you know more about my experience, I worked for 3 years as a business developer at Code Geist which is a startup detected for building and organizing Tech-entrepreneurial Hackathons, where we build a 72-hour world-class hackathon with the sponsorship of the top tech companies and startups in the MENA region, to offer them some benefits in many fields like hiring, marketing exposure, discover new ideas, and many other benefits.

     We also worked on Techila Con event which is an online event in a partnership with Startups Galaxy, where we held online sessions on many tech and entrepreneurs’ topics from top speakers.

        </p>)
 
}

    render(){
        return(
            <div>
                <div>
                    <line>
                    <h3> CESS 400, Course Name</h3>
                    <IoIosicon.IoIosArrowDropdown onClick={this.showcontent}>
                        
                    </IoIosicon.IoIosArrowDropdown>
                    </line>
                </div>
                
            </div>

        );

    }
    

 }
 export  default StudentCourse;
