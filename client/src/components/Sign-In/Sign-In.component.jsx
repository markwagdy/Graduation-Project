import React from 'react';
import './Sign-In.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../CustomButton/Custom-Button.component';
//import Navbar from  '../Navbar/Nav-bar.component';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router-dom";

class SignIn extends React.Component
{
    constructor(props){
            super(props);
            this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
            this.onChangepassword = this.onChangepassword.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state={
                
                email:"",
                password:"",

                islogin:false,
                errors:{}
            };
    }
    
    componentDidMount(){
        localStorage.removeItem("user")
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    
    onChangepassword(e) {
     this.setState({ password: e.target.value })
  }
  /* handleChange=(e)=>{
    //    console.log("baby"+e.target.value)
    this.setState({[e.target.id]:e.target.value})
   }*/
onSubmit(e){
    e.preventDefault();    
    const userData={
    email:this.state.email,

    password:this.state.password    
    } 
    console.log(userData)
    axios.post('http://localhost:8000/api/loginstudent', userData)
    .then((res) => {
        if (res.status === 200) {
            this.setState({ islogin: true })
        //    window.location = "/student";
        localStorage.setItem("user",res.data.token)
        this.props.history.push('/student', { email:this.state.email })
    }
    }).catch((error) => {
        console.log(error)
   
    });
    if(this.state.islogin===false){

    axios.post('http://localhost:8000/api/logindoctor', userData)
    .then((res) => {
        if (res.status === 200) {
            this.setState({ islogin: true })
            localStorage.setItem("user",res.data.token)
         //   window.location = "/doctor";
         this.props.history.push('/doctor', { email:this.state.email })
    }

    }).catch((error) => {
        console.log(error)
   
    });
    }
 
/*this.setState({ 
password:'',
email:''
})*/
    }

    render(){
        
     //   const {errors}=this.state;
        return(
        <div className='sign-in'>
            <form className='login-form' onSubmit={this.onSubmit}>
                <FormInput name='email'  value={this.state.email} handlChange={this.onChangeUserEmail} type='email' placeholder='EMAIL' id="email"></FormInput>
                <FormInput name='password' value={this.state.password} handlChange={this.onChangepassword} type='password' placeholder='PASSWORD' id="password"></FormInput>

                                 
                <CustomButton type='submit'>LOG IN</CustomButton>            
            
                <hr className='line'></hr>
             
            </form>    
        </div>);
    }
}
export default withRouter(SignIn);