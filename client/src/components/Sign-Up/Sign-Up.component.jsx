import React from 'react';
import CustomButton from '../CustomButton/Custom-Button.component';
import FormInput from '../form-input/form-input.component';
import './Sign-Up.style.scss';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Component } from 'react';

class  SignUp extends Component {
   constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangepassword = this.onChangepassword.bind(this);
      this.onChangepassword2 = this.onChangepassword2.bind(this);
      this.onChangeacadID = this.onChangeacadID.bind(this);
      this.onChangeGender = this.onChangeGender.bind(this);
      this.onSubmit = this.onSubmit.bind(this);


      this.state = {
         username:'',
         password:'',
         password2:'',
         acadId:'',
         email:'',
         gender:'',
         role:''
      
      }
  }

  onChangeGender(e) {
   this.setState({ gender: e.target.value })
}
  onChangeUserName(e) {
      this.setState({ username: e.target.value })
  }

  onChangeUserEmail(e) {
      this.setState({ email: e.target.value })
  }
  
  onChangepassword(e) {
   this.setState({ password: e.target.value })
}
onChangepassword2(e) {
   this.setState({ password2: e.target.value })
}
onChangeacadID(e) {
   this.setState({ acadId: e.target.value })
}

  onSubmit(e) {
      e.preventDefault()

      const userObject = {
         username: this.state.username,
         email: this.state.email,
         acadId: this.state.acadId,
         password: this.state.password,
         password2: this.state.password2,
         gender: this.state.gender
      };
      

      if(this.state.role==='student'){

      axios.post('http://localhost:8000/api/registerstudent', userObject)
          .then((res) => {
             
            if (res.status === 200) {
               this.setState({ islogin: true })
             //  window.location = "/student";
             this.props.history.push('/student', { email:this.state.email })
       }
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });
      }
      else if (this.state.role==='doctor'){
         console.log(userObject)
         axios.post('http://localhost:8000/api/registerdoctor', userObject)
         .then((res) => {
           if (res.status === 200) {
            this.setState({ islogin: true })
            //window.location = "/doctor";
            this.props.history.push('/doctor', { email:this.state.email })
      }
             console.log(res.data)
         }).catch((error) => {
             console.log(error)
         });
      }
      else{
         console.log("ROLE not assigned")
      }
    /* this.setState({ 
      username:'',
      password:'',
      password2:'',
      acadId:'',
      email:'',
      })*/
  }

   render() {
      return (
            <div className='sign-up'>
            <div className='student-dr'>
               <button className='btn' onClick={() => this.setState({role:'student'})}>Student</button> 
               <button className='btn1' onClick={() => this.setState({role:'doctor'})}>Doctor/Ta</button>  
               <form className='form'onSubmit={this.onSubmit} >
               <FormInput label='Name' value={this.state.username} handlChange={this.onChangeUserName} placeholder='Name' id='name' type='string'></FormInput>               
               <FormInput label='Id' value={this.state.acadId} handlChange={this.onChangeacadID} placeholder='Id' className='id' id='id' type='string'></FormInput>               
               <FormInput label='Email' value={this.state.email} handlChange={this.onChangeUserEmail} placeholder='Email' id='email' type='email' ></FormInput>               
               <FormInput label='password' value={this.state.password} handlChange={this.onChangepassword} placeholder='password'  id='password'  type='password'></FormInput>               
               <FormInput label='confirm password' value={this.state.password2} handlChange={this.onChangepassword2} placeholder='confirm password' id='password' type='password'></FormInput>               
               <div className='genderUnit'>
                  <label className='genderLabel'>Gender</label>
                  <div className='buttons'>
                  <input type="radio"  onChange={this.onChangeGender} name="sex" value="male" /><span >Male</span>   
                  <input type="radio" onChange={this.onChangeGender} name="sex" value="female"/><span >Female</span>                  
                  
                  </div>
               </div> 
               <div className='yourPhoto'>
                  <label className='genderLabel'>Your Photo</label>
                  <div className='dragphoto'>
                     <p className='pa'>Drag file here or</p>
                     <input type="file" className='custom-file-input'></input>
                     <div className='trans'>boom</div>
                  </div>
               </div>
               <CustomButton id='signup' type="submit">Sign Up</CustomButton>
               </form>       
              
            
            </div>

            </div>
      )
   }   
}
export default withRouter(SignUp);