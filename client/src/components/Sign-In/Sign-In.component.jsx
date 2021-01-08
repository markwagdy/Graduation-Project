import React from 'react';
import './Sign-In.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../CustomButton/Custom-Button.component';

class SignIn extends React.Component
{
    constructor(){
            super();
            this.state={
                email:'',
                password:''
            };
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        
        try{
            this.setState({email:'',password:''});
        }catch(err)
        {
            console.log(err);
        }
    };
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    };




    render(){
        return(
        <div className='sign-in'>
            <form className='login-form' >
                <FormInput name='email' type='email' placeholder='EMAIL'></FormInput>
                <FormInput name='password' type='password' placeholder='PASSWORD'></FormInput>
                <CustomButton type='submit'>LOG IN</CustomButton>            
                <hr className='line'></hr>
                <CustomButton>SIGN UP</CustomButton>
            </form>    
        </div>);
    }
}
export default SignIn;