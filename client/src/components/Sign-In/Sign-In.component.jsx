import React from 'react';
import './Sign-In.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../CustomButton/Custom-Button.component';
import Navbar from  '../Navbar/Nav-bar.component';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class SignIn extends React.Component
{
    constructor(){
            super();
            this.state={
                email:"",
                password:"",

                islogin:true,
                errors:{}
            };
    }
   handleChange=(e)=>{
    //    console.log("baby"+e.target.value)
    this.setState({[e.target.id]:e.target.value})
   }
   onSubmuit=e=>{
    e.preventDefault();    
    const userData={
    email:this.state.email,

    password:this.state.password    
    }
    console.log(userData);
    }

    render(){
        const {errors}=this.state;
        return(
        <div className='sign-in'>
            <form className='login-form' onSubmit={this.onSubmuit}>
                <FormInput name='email' type='email' placeholder='EMAIL' handleChange={this.handleChange} value={this.state.email} errors={errors.email} id="email"></FormInput>
                <FormInput name='password' type='password' placeholder='PASSWORD' handleChange={this.handleChange} value={this.state.password} errors={errors.password} id="password"></FormInput>

                <Link to = "../Navbar/Nav-bar.component"> <CustomButton type ="submit">LOG IN</CustomButton></Link>          
                <CustomButton type='submit'>LOG IN</CustomButton>            
                <hr className='line'></hr>
                
            </form>    
        </div>);
    }
}
export default SignIn;