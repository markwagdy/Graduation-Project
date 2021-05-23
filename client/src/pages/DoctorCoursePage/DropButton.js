import React, { Component } from 'react';
import Drop from './ico/Drop.png'
import DropCI from './DropCI'

class DropButton extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.state={ show:false}
        this.myfunction=this.myfunction.bind(this);
      }
  
      myfunction() {
          this.setState({show:!this.state.show})
      }
  

    render() { 
        return ( 
           <div>
                <button ><img style={{width:"75%",height:"75%"}} src={Drop} alt="drop" onClick={this.myfunction}/></button>
           
              {
                this.state.show?
                <DropCI/>
                :""
              }
           </div>
         );
    }
}
 
export default DropButton;