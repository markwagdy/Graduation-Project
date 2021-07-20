
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,Alert} from 'reactstrap';
import * as TiIcons from 'react-icons/ti';
import './CourseCard.style.scss';

class CourseCard extends Component 
{
  constructor(props){
    super(props);
   
}

  render(){
 return (
    <div className="div1">
      <Card className="addcard">
        <CardBody > 
         
          <Button className=" button "><TiIcons.TiPlus className="icon"/></Button>
         </CardBody>
      </Card>
    </div>
  );
}
}

export default CourseCard; 