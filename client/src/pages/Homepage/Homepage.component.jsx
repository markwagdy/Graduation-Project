import React, { Component } from 'react';
import './Homepage.style.scss';
import SignIn from '../../components/Sign-In/Sign-In.component';
import SignUp from '../../components/Sign-Up/Sign-Up.component';
import CustomButton from '../../components/CustomButton/Custom-Button.component';
class HomePage extends Component
{   constructor(props){
    super(props);
    this.state={
        isSignedUp:true
    }
}
handleChange=(event)=>{
    this.setState({isSignedUp:false})
}

    render(){
        const isSignedUp=this.state.isSignedUp;
    return(
    <div className='homepage'>
        <div className="img" >
        <h2 className="slogan">SLOGAN</h2>
        <div className='right-half'>
        <h1 className={`${isSignedUp?'mini-title':'title2'}`} >WELCOME</h1>
        {
            isSignedUp? 
            <SignIn className='login-form'></SignIn>
            :
            <SignUp></SignUp>
        }
          
            <CustomButton className='signUp' onClick={this.handleChange} >SIGN UP</CustomButton>
        
        
        </div>
        </div>
        
    </div>
); 
    }
    }
export default HomePage;