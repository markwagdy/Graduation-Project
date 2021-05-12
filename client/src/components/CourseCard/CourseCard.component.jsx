
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Alert} from 'reactstrap';
import * as TiIcons from 'react-icons/ti';
import './CourseCard.style.scss';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CardAlert from '../CardAlert/CardAlert.component';

class CourseCard extends Component 
{
  constructor(props){
    super(props);
   
}
// handleChange=()=>{
 
// }


  render(){
 return (
    <div className="div1">
      <Card className="addcard">
        <CardBody > 
         
          <Button className=" button " /*onClick={this.handleChange}*/><TiIcons.TiPlus className="icon"/></Button>
         </CardBody>
      </Card>
    </div>
  );
}
}

export default CourseCard; 